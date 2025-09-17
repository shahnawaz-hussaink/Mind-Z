import { Send,LockIcon } from "lucide-react";
import { useState } from "react";

export default function WritingArea() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            console.log(message);
            setMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <div className="w-full bottom-10 px-4 ">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm border border-gray-200 p-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask a question or describe how you’re feeling…"
                            className="flex-1 p-3 border-none outline-none text-gray-700 placeholder-gray-400"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!message.trim()}
                            className={`p-3 rounded-md transition-colors duration-200 ${
                                message.trim()
                                    ? 'bg-[#46827C] text-white hover:bg-[#3a6b66]'
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                    
                    <div className="text-center mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
                        <LockIcon className="w-4 h-4" />
                        <span>Your conversations are end-to-end encrypted</span>
                    </div>
                </div>
            </div>
        </>
    );
}