import {createContext, useState} from 'react';

export const Context = createContext();

   const ContextProvider = (props) => {

    const [input, setInput] = useState(" ");
    const [recentPrompt, setRecentPrompt] = useState(" ");  
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");


    const delayPara = (index, nextWorld) => {
        setTimeout(function(){
            setResultData((prevData) => prevData + nextWord)
        },75*index)
    }

    const newChat = () => {
        setLoading(true)
        setShowResult(false)
    }


    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined){
            response = await runChat(prompt);
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev, input])
            setRecentPrompt(input)
            response = await runChat(input)
        }
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i = 0; i < responseArray.length; i++)
            {
                if(i === 0 || i%2!==1){
                    newResponse += responseArray[i];
                }
            else{
                newResopnse += "<b>"+responseArray[i]+"</b>";
            }
            }
        let newResponse2 = newResponse.split("*").join("<br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            const nextword = newResponseArray[i];
            delayPara(i, nextWord+"")
        }
        setResultData(newResponse2)
        setLoading(false)
        setInput("")
    }

    onSent("What is react js")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        input,
        setInput,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        newChat
    } 

    return(
        <Context.Provider value={contextValue}>
            {props.children}
            </Context.Provider>
    )
}