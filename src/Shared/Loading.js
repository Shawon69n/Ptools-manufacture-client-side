import React from 'react';

const Loading = () => {
    return (
        <div  className="flex justify-center mt-64 space-x-2 animate-bounce">
    <div  className="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div  className="w-4 h-4 bg-green-400 rounded-full"></div>
    <div  className="w-4 h-4 bg-black rounded-full"></div>
</div>

    );
};

export default Loading;