// import React from 'react';

const Skills = () => {
    return (
        <div id="skills" className="text-white py-5  lg:mx-10 md:py-10 bg-slate-900 xl:ms-20 px-7">
            <h1 className="text-4xl md:text-5xl text-center font-bold lg:-mx-10 xl:-ms-28 my-10 ">My <span className="text-cyan-400">Skills</span></h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5">
                <div className="card  hover:shadow-lg hover:shadow-cyan-400 md:w-44  bg-slate-800 shadow-2xl">
                    <div className="card-body">
                        <div className="">
                            <img src="https://afzal-hussain-2023.web.app/assets/html-92b76a73.png" alt="" />
                            <p className="text-center">HTML5</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img src="https://afzal-hussain-2023.web.app/assets/css-79a7f026.png" alt="" />
                            <p className="text-center">CSS3</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img className="rounded" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRk-hF27Xdug4-cmuK7VcMeMXc8MwTda1UShRntrChOJjMpwCt" alt="" />
                            <p className="text-center">Bootstarp</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img src="https://afzal-hussain-2023.web.app/assets/tailwind-28e4d023.png" alt="" />
                            <p className="text-center">TailwindCSS</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img className="rounded" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzSFp5QBDC7EdCajHFyEY3bTn69eE6IbiDTTNonrpwmBkE1P7a" alt="" />
                            <p className="text-center">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img src="https://afzal-hussain-2023.web.app/assets/react-9d641e86.png" alt="" />
                            <p className="text-center">React js</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img src="https://afzal-hussain-2023.web.app/assets/nodeJs-d83eb6dd.png" alt="" />
                            <p className="text-center">Node js</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img src="https://afzal-hussain-2023.web.app/assets/express-afe64c50.png" alt="" />
                            <p className="text-center">Express js</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHxElEQVR4nO2de0xTVxzHz5bFbMuyLMYs2fbHsv21P5Zlxn8Wt2VZlokCFxBURLAI4yGUN6VSCi208lJAxfIofYGlgEUEpFDaAhWngFjRTZY9/liyZWYvZ9TN1xTucrpUUbHctqec23P5JN+/e87v05577u055wIQwBSbChtxt4HTpHQmXm+ZatmCux2cpNImfTtKGTpfZBb/gLstnCS5g/cr1bCBDtGG0tpz2s9xt4dT5PVl2CnFBhomojWCLhgU/oK7TdyABs9kGFNmXcWHiemIoTdpgunDZxpKcTePaIxG46oEfezVhcWHSexOdAqIbt8+pzurex93O4mkdqL2hXh9zI3Hiw+T3pvuFACTfCzlVvv59jdxt5e4bz5PH/3PYsWHyTqR8UAATEZvxjWDw7AGd7uJIamD9/vTig+TY8p+RABMdn/2X/op/cu42x7wZHanXnBXfJi8wdwnBMAITILLOrvuedx9CFiE/Tm9SxUfpmAob1EBMBKr5BLufgQkElPh1rCGoCWLDyM0C54qAKZmvKYTd38Citzh3NVRLaFzTIoPU2gucCsgVEfRjZON+bj7FTAkG3iXmRYfRmQRuhUAs02/bV7j0HyEu2+sRzwgOORJ8WHE1j1LCoBJ7+VfN84aV+HuI2s5bK1+fXNz8LynAopthYwEwFSN7RvA3U/WktaV+JOnxYcpsYkYCwhrDadV06pI3H1lHTJLcVxYg+fF/19AEWMBMCk9qbeUDuWLuPvMKnhHom96U3yngBHPBMBUn9zfh7vPrEE2JMr1tvgwEi8ERLZFzbeeb30Pd99ZQaxuy53lFuC8S7ZIZwHXkVskqb4U3xcBlC6M1kxrPgFcJqE99prPAkbFXgmAEQ8Xfw+4Srml7MMwBbPnPe4FMJ+GLvaYQjel+wBwkYzulEu+Ft+XIcgVmU12FnCRKBXzB27ufwG+CXDOiC60vgG4RKm5UISi+BQCATD7T9a2Ay6R2rnLoyeelJ8uwq6k9fL/BlwiUhkyzyYBmzTBtHpKHQK4gNwqiUFVfAoKGPN9CIKRj8gnARfIOpZ2kY0C4o/u+hdwgbjWrbdRCpAiGoJgVNMqCpBORNNGmo2/gE2aYLpyrMoGSAb1+E8hmoa6kn6cfwOQjKA328pmAaE6itY79K8BUkE5/6cQPAtaLIozihJAKqgvwJQfBBD9bCiyGd0NGOUnAZl9WVcBiUjt0pe8/eOdcidghPmyFCbhdcWTeT+w11YWgrr4lPNPeWYLszz5p8xutz8HSENqFhf5Q0AxYgEw6um2tYA0RCaB1j8ChMgFKCeUSYA08vsyrX4RYEMvoP50/QFAGtk9aTP+ECC2ud8f4E0OnDqoAqTB707+xh8CivwgoO5UXRsgjXSjfwSIrPnIBRC5qwbVKgjqsRRaF9+k50v2jdf0ANLI6eEvueOR8iJCSw5yAdX26hOANPJ7M0/7Q4BgOBO5gNrx2iOANAr7czr9ISB/+NGd8iiiOKOoAKQhHizwy51w7tDDsyJQRTmlTAWkIbPI1vlDQNZgKnIB6rPqzwCJhDcG+UFACnIBxC5VjFZH3GP7LyCuY+d9QCpJBvcnn1BeJGcoDamAfJPgN0AqBf3ZJrZfhPeOVpwCpFIzVhWEXICZj1RA/en6/YBk4FmfbL0PCNaEkPlnzEJSuhJ+RimgAOGdMNzEDUinzCwWohRQaMlDOP6Xfwm4AMr9AcUI/xFrmmxJBlyAb0z6FpUAKaKliXD+z5njbGSWknUUwyPJqCUiGytGIqBitOIk4BIoNmlTig30XrvE99mPNoTWTmvXAy5RZi3ZjUJA+clSnwXknsj7A3CR+Lann4jLNJXjct8vvhNNuYCLyG2lsfAdAL4IqPJRADxLDnCZJAPvii8CKuy+CeDst99F+YDo3fBG7/eNldtlXhc/50TuFdz9ZwWCvuwRbwXIR8u8XgWtOqcNxt13ViClpc/u0EXe9UaA1ObdNFQ+sncCd79ZRflI2cfhXmxhlZg9vxFLMCbeXXnHwCIUDQiOeiqgeFDk8dDTPKlKWP6vWCC9nkrBrPjwhPVSk2e/gCp71SDuPrL+fTE7tMyuB1HKELpqiPlFWDgovAyvN7j7yHpqbJVrmTyyjlNH0QrzPqbj/h1il5v4a1NfRPMmtwJ2a3bSOlPtksWP69x5j7OH8/lCmUWc524xV746iTZ0V7st/g5D7H21Q/0p7r4ELPIhSebT7pRLlHy6Q19O87p4ixZ/uyFmTnVWtRF3HwKe0mFxckTTk8NRZUOWU8BiF+IYww66ZaolHHfbiaHCUhq/uTl4gYAguu5gnlOA/vh+51tVXcVPPZY6b5zsCMPdZuKQD8vXR6vD70MB25Rh9KE6gVMATJ250ll80eCeu0QfOYObGnvNmi8MO29manY9IgDm+Hjbyjx/uWhsLppbKKDHeGDO4Rhf+eYvF8aOg98tFDA+ZrywbB++AgAmk068UMDUpKlppS7LiN3e+8qhuoIHAhzTFv6KgGWm4bBo3iVgZmaUW+t62IC6pey2S8DFi+Nv4W4P5zjSWvnngyFoZQa0/HS01/zoEjA7O7EaQxO4jbHz0FcPh6Azr+JuD+fo7qqfcAn42mF/B3d7OMcxo+LUyiwIIxZL67qJ0/1Gs0l9fWZmNCAXWf0HT4e5upIwh74AAAAASUVORK5CYII=" alt="" />
                            <p className="text-center">Mongodb</p>
                        </div>
                    </div>
                </div>
                <div className="card md:w-44 bg-slate-800 shadow-2xl hover:shadow-lg hover:shadow-cyan-400">
                    <div className="card-body">
                        <div>
                            <img src="https://afzal-hussain-2023.web.app/assets/firebase-e5a69ac5.png" alt="" />
                            <p className="text-center">Firebase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;