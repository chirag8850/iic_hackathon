from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import os

from dotenv import load_dotenv
import chainlit as cl
from googletrans import Translator
translator = Translator()

# Load environment variables from .env file
load_dotenv()


HUGGINGFACEHUB_API_TOKEN = os.getenv("HUGGINGFACE_API_TOKEN")

repo_id = "tiiuae/falcon-7b-instruct"
llm = HuggingFaceHub(huggingfacehub_api_token=HUGGINGFACEHUB_API_TOKEN, 
                     repo_id=repo_id, 
                     model_kwargs={"temperature":0.7, "max_new_tokens":500})


template = """Question: {question}

Answer: Let's think step by step."""


@cl.on_chat_start
def main():
    # Instantiate the chain for that user session
    prompt = PromptTemplate(template=template, input_variables=["question"])
    llm_chain = LLMChain(prompt=prompt, llm=llm, verbose=True)

    # Store the chain in the user session
    cl.user_session.set("llm_chain", llm_chain)


@cl.on_message
async def main(message: str):
    # Retrieve the chain from the user session
    llm_chain = cl.user_session.get("llm_chain")  # type: LLMChain

    # Detect the language of the incoming message
    message_language = translator.detect(message).lang

    # Translate the message into English
    translated_message = translator.translate(message, dest="en").text

    # Call the LangChain model with the translated message
    res = await llm_chain.acall(translated_message, callbacks=[cl.AsyncLangchainCallbackHandler()])

    # Translate the response back into the original language
    translated_response = translator.translate(res["text"], dest=message_language).text

    # Send the response
    await cl.Message(content=translated_response).send()