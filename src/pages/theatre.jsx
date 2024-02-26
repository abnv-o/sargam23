import React from "react";

const theatre = () => {
    return (
        <div>
            {/* parent */}
            <div className="flex flex-col h-screen justify-center gap-5 p-20 bg-[#E1F0DA]">
                {/* top */}
                <div className="flex flex-row justify-around items-start p-10">

                    {/* data */}
                    <div className="flex flex-col justify-center items-center  bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
                        <h1>KATHAPRASANGAM(M/F)</h1>
                        <h1>MONO ACT(M/F)</h1>
                        <h1>MIMICRY(M/F)</h1>
                    </div>
                    {/* data end */}

                    {/* data */}
                    <div className="flex flex-col justify-center items-center bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
                        <h1>MIME</h1>
                        <h1>SKIT</h1>
                        <h1>EKANGA NADAKAM</h1>
                    </div>
                    {/* data end */}
                </div>
            </div>
        </div>
    );
};

export default theatre;