import React from "react";

const dance = () => {
    return (
        <div>
            {/* parent */}
            <div className="flex flex-col h-screen justify-center gap-5 p-20 bg-[#E1F0DA]">
                {/* top */}
                <div className="flex flex-row justify-around items-start p-10">

                    {/* data */}
                    <div className="flex flex-col justify-center items-center  bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
                        <h1>MOHINIYATTAM</h1>
                        <h1>BHARATANATYAM(M/F)</h1>
                        <h1>KUCHIPUDI(M/F)</h1>
                        <h1>FOLK DANCE(M/F)</h1>
                        <h1>KATHAKALI(M/F)</h1>
                        <h1>OTTAMTHULLAL(M/F)</h1>
                        <h1>ADAPT TUNE</h1>
                        <h1>KERALA NADANAM(M/F)</h1>

                    </div>
                    {/* data end */}

                    {/* data */}
                    <div className="flex flex-col justify-center items-center bg-[#BFD8AF] w-64 h-80 rounded-3xl border-2 border-[#99BC85]">
                        <h1>GROUP DANCE</h1>
                        <h1>KERALA NADANAM GROUP</h1>
                        <h1>VATTAPATTU</h1>
                        <h1>THIRUVATHIRA</h1>
                        <h1>OPPANA(F)</h1>
                        <h1>MARGAMKALI</h1>
                        <h1>DUFFMUTTU</h1>
                        <h1>KOLKALI</h1>
                        <h1>STEP IN SYNCHRO</h1>
                    </div>
                    {/* data end */}
                </div>
            </div>
        </div>
    );
};

export default dance;