import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced';
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,props.user.username,props.user.secret);
    return (
        <div className="background" style={{height:'100vh'}}>
            <MultiChatWindow {...chatProps} />
            <MultiChatSocket {...chatProps} style={{height: '100%'}} />
        </div>
    );
}

export default ChatsPage;