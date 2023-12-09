<template>
    <div class="transition-all">
        <div class="w-screen  h-[90vh] sm:h-[80vh] md:h-[65vh] lg:h-[95vh] flex flex-col bg-[#94C12F] relative">
            <div class="w-screen h-full z-50 bg-opacity-40  bg-black absolute"></div>
            <div style="z-index: 100;" v-if="showOne"
                class="w-full h-full overflow-hidden duration-500 z-50   backdrop-blur  fixed ">
                <div class="w-full h-full md:h-[33rem] relative flex justify-center items-center transition-all">
                    <!--v-if="showOne" -->
                    <div v-if="hide" class="w-full h-full  absolute"
                        @click="showOne = !showOne, showTwo = false, choose = 3"></div>
                    <div v-if='showTwo == false'
                        class="w-11/12 md:w-7/12 duration h-96 z-50 bg-white shadow rounded-xl flex justify-center items-center">
                        <div class="w-9/12  h-5/6 space-y-5 flex justify-center items-center flex-col">
                            <div>
                                <p class="text-md md:text-xl font-semibold text-center">
                                    <span class="text-[#94C12F] text-4xl font-bold">S</span><span id="last"
                                        class="text-black text-4xl font-bold">CHMID</span> <br /> <br />
                                    {{ $t('modaltxt1') }}
                                </p>
                            </div>
                            <div>
                                <p class="text-md md:text-xl  font-semibold">
                                    {{ $t("commentpouvezvousaider") }}
                                </p>
                            </div>

                            <div
                                class="w-full lg:flex space-y-2 lg:space-y-0 justify-around items-center duration-500 transition-all">
                                <button @click="SelectCategorie(0)"
                                    class="hover:w-1/2 capitalize text-sm md:text-lg font-semibold w-full lg:w-36 text-white rounded  px-0 duration-500 py-2 lg:py-3  bg-[#94C12F]">
                                    {{ $t('particulier') }}
                                </button>
                                <button @click="SelectCategorie(1)"
                                    class="hover:w-1/2 capitalize text-sm md:text-lg font-semibold w-full lg:w-36 text-white rounded  px-0 duration-500 py-2 lg:py-3  bg-[#94C12F]">
                                    {{ $t('professionnel') }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="choose == 0"
                        class="w-11/12 md:w-7/12 duration py-9 z-50 shadow bg-white rounded-xl flex justify-center items-center">
                        <div class="w-11/12 h-5/6  space-y-5 flex justify-center items-center flex-col">
                            <div>
                                <p class="text-xl  font-semibold text-center">
                                    {{ $t('quelsuivivousserameilleur') }}
                                </p>
                            </div>
                            <!-- text-[#94C12F] hover:text-white duration-500 -->
                            <div
                                class="w-full h-96  overflow-hidden overflow-y-scroll mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>Déménagements nationaux</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-sm md:text-md text-center">
                                            <p>Déménagements régionaux</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>Déménagements internationaux</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>montages de meubles</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>montages de cuisines</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>Dédouanement</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>Entreposage</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>transport de coffres-forts</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p> Liquidation de ménage</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p> Débarras/élimination des déchets</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-center text-sm md:text-md">
                                            <p>Déménagements de bureaux</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div v-if="choose == 1"
                        class="w-11/12 md:w-6/12  duration py-9 z-50 shadow bg-white rounded-xl flex justify-center items-center">
                        <div class="w-11/12 h-5/6  space-y-5 flex justify-center items-center flex-col">
                            <div>
                                <p class="text-xl font-semibold text-center">
                                    {{ $t('quelsuivivousserameilleur') }}
                                </p>
                            </div>
                            <!-- text-[#94C12F] hover:text-white duration-500 -->
                            <div class="w-full md:w-10/12 mx-auto grid-cols-2 grid lg:grid-cols-3 gap-2 md:gap-4">
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-sm md:text-md text-center">
                                            <p>Déménagements nationaux</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-sm md:text-md  text-center">
                                            <p>Déménagements régionaux</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-sm md:text-md  text-center">
                                            <p> Débarras/élimination des déchets</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="group w-full ">
                                    <div
                                        class="w-full text-[#94C12F] h-24 border border-[#94C12F] group-hover:border-none duration-700 cursor-pointer group-hover:text-white flex justify-center flex-col  bg-white group-hover:bg-[#94C12F] p-3 rounded-lg">
                                        <div class="flex w-full justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                            </svg>
                                        </div>
                                        <div class="text-sm md:text-md  text-center">
                                            <p>Déménagements de bureaux</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div class="w-screen h-full absolute" style="z-index: 40;">
                <div class="h-full  w-full">
                    <swiper style="--swiper-pagination-color: #94C12F; " :spaceBetween="0" :centeredSlides="true" :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }" :pagination="{
    clickable: true,
}" :navigation="false" :modules="modules" class="mySwiper w-full h-full">
                        <swiper-slide class="h-screen   w-screen flex justify-start items-end">
                            <img class="object-cover object-center w-full h-full" src="/img/images/banner-6.jpg" alt="">
                        </swiper-slide>

                        <swiper-slide class="h-screen w-screen">
                            <img class="object-cover object-center w-full h-full" src="/img/images/banner-8.jpg" alt="">
                        </swiper-slide>

                        <swiper-slide class="h-screen w-screen">
                            <img class="object-cover object-center w-full h-full" src="/img/images/banner-9.jpg" alt="">
                        </swiper-slide>

                    </swiper>
                </div>
            </div>
            <div style="z-index:70;"
                class="w-full   lg:w-11/12  h-full  mx-auto lg:mx-0 flex flex-col lg:flex-row justify-center lg:justify-end  items-center lg:items-end ">
                <div
                    class="h-full md:h-96 w-full  sm:w-[60%]  md:w-[85%]   flex sm:items-end md:items-center justify-center">
                    <div class="h-full   md:h-4/6 w-11/12 lg:w-full ">
                        <div style="z-index: 80;"
                            class="w-full  h-5/6 mx-auto flex justify-center sm:justify-start md:justify-center items-end">
                            <div class=" space-y-2 md:space-y-4  rounded">
                                <div
                                    class="text-3xl sm:text-2xl text-center lg:text-left md:text-5xl  text-white italic font-bold">
                                    <p>{{ $t("controlervotredepart") }}</p>
                                </div>
                                <div class="text-white text-center lg:text-left text-md md:text-lg font-medium">
                                    <p>{{ $t("phrase1") }}</p>
                                </div>
                                <div class="w-full  flex lg:justify-start justify-center items-center">
                                    <button @click="showOne = true, hide = true" style="z-index: 110;"
                                        class="hover:bg-white duration-500 bg-[#94C12F] cursor-pointer text-lg rounded-lg w-full  sm:w-[40%] md:w-[60%] lg:w-[50%] py-3 capitalize font-semibold hover:text-[#94C12F] border border-[#94C12F] text-white">
                                        {{ $t("debutervotredemarche") }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="w-10/12 md:w-8/12 lg:w-6/12 space-y-2 h-[70%] sm:h-[50%]  lg:h-[65%] bg-white p-4 bg-opacity-50 rounded-t-md">
                    <div class="h-1/2  w-full border border-white rounded flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-28 text-white h-28">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                    <div
                        class="h-1/2 w-full border space-y-4 border-white rounded flex flex-col justify-center items-center">
                        <div class="w-[95%] mx-auto gap-1  h-10 lg:h-14 px-3 rounded ">
                            <div
                                class="text-[#94C12F] w-full text-2xl font-semibold bg-white flex justify-center items-center h-full rounded">
                                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='1096' :duration='3'
                                    separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' />
                            </div>
                        </div>
                        <div class="w-[95%] mx-auto text-white text-center  text-sx md:text-2xl font-semibold  px-3">
                            <p>{{ $t("demenagementsdejarealisesgraceavous") }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full md:w-9/12 mx-auto   flex justify-around items-center  my-10 ">
            <div class=" flex justify-center space-y-3 items-center flex-col">
                <div class="w-28 lg:w-36 h-28 lg:h-36 bg-black rounded-full border-2 border-[#94C12F] p-6">

                </div>
                <div class="text-md lg:text-2xl font-semibold text-center">
                    <span> <span class="text-[#94C12F]">5000</span> {{ $t("clientssatisfaits") }}</span>
                </div>
            </div>

            <div class=" flex justify-center space-y-3 items-center flex-col">
                <div class="w-28 lg:w-36 h-28 lg:h-36 bg-black rounded-full border-2 border-[#94C12F] p-6">

                </div>
                <div class="text-md lg:text-2xl font-semibold text-center">
                    <span> <span class="text-[#94C12F]"> +8 </span>{{ $t("Plusdemetiers") }}</span>
                </div>
            </div>

        </div>

        <div style="z-index: 100;" class="h-full lg:h-[80vh] w-full bg-white flex justify-center items-center">
            <div class="w-11/12 sm:w-10/12 lg:w-10/12  lg:h-96  md:grid gap-4 grid-cols-1 lg:grid-cols-2 ">
                <div class="w-full h-full bg-black">

                </div>
                <div class="w-full h-full space-y-2 bg-white ">
                    <div class="w-[90%] lg:w-[95%] md:w-[80%] flex items-center justify-start">
                        <div>
                            <p class="text-md md:text-lg capitalize font-semibold">
                                “{{ $t('slogan') }}”
                            </p>
                        </div>
                    </div>
                    <div class="w-full  flex items-center justify-end">
                        <div class="w-[80%] md:w-[60%] ">
                            <p class="text-md md:text-lg font-medium">
                                Sokrates, griechischer Philosoph
                                (469 v. Chr.-399 v.Chr.)
                            </p>
                        </div>
                    </div>
                    <div class="capitalize space-y-2 font-light  border-l-4 md:border-l-8  border-[#94C12F]  px-2 md:px-4">
                        <p class="text-sm sm:text-lg ">
                            Als internationales Logistikunternehmen sind wir Ihr verlässlicher Partner, sowohl in der Nähe
                            als auch in der Ferne. Unser breites Leistungsspektrum garantiert Ihnen eine professionelle
                            Abwicklung Ihrer Umzugsprojekte. Wir kümmern uns um jedes Detail, um Ihnen einen reibungslosen
                            und stressfreien Umzug zu ermöglichen.
                        </p>
                        <p class="text-sm sm:text-lg">
                            Zusätzlich bieten wir maßgeschneiderte Coachings für Logistikunternehmen, um deren Abläufe zu
                            optimieren und die Kundenzufriedenheit zu steigern. Entdecken Sie auch unsere flexiblen
                            Lagerungslösungen für Ihre spontanen oder langfristigen Lagerbedürfnisse.
                        </p>
                        <p class="text-sm md:text-lg">
                            Lassen Sie sich von unserer Expertise überzeugen – wir stehen Ihnen jederzeit gerne zur
                            Verfügung!
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class=" w-full bg-white my-5 md:mt-20 flex justify-center ">
            <div class="w-11/12 md:w-7/12 h-full bg-white space-y-1 md:space-y-3 flex flex-col justify-center items-center">
                <div class="text-center text-lg md:text-2xl font-semibold text-black">
                    {{ $t("nosservicespourvous") }}
                </div>
                <div class="w-3/12 h-1 rounded bg-[#94C12F]"></div>
            </div>
        </div>
        <div class=" flex justify-center items-center mx-auto ">
            <div class="w-full md:w-11/12 h-auto flex items-center justify-center gap-4   ">
                <swiper :autoplay="{
                    delay: 3000,
                    disableOnInteraction: true,
                }" style="--swiper-navigation-color: #94C12F;  --swiper-navigation-size: 35px;" :navigation="true"
                    :modules="modules" class="w-full h-auto">
                    <swiper-slide class="">
                        <div
                            class="h-[80vh] md:h-5/6   grid grid-cols-3 grid-rows-2 md:grid-rows-none rounded overflow-hidden ">
                            <div class="row-span-1  col-span-3  md:col-span-1 h-full  flex justify-center items-center">
                                <div
                                    class="w-[90%]  rounded-xl overflow-hidden  h-[80%] md:h-[90%] flex justify-center items-center">
                                    <img class="w-full mx-auto h-full "
                                        src="/img/images/schmid_logsitik_berlin_internationale_umzuege-300x300.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-span-3 row-span-1  md:col-span-2  h-full  flex justify-center items-center">
                                <div class="mx-auto space-y-2 w-11/12">
                                    <div>
                                        <p class="text-lg font-semibold">Internationaler Logistikverkehr</p>
                                    </div>
                                    <div>
                                        <p class=" text-md font-light">
                                            Profitieren Sie von unseren weltweiten Umzugsservices, unterstützt durch
                                            erfahrene
                                            Mitarbeiter, moderne Containerfahrzeuge und fachgerechte Beladung von
                                            Seecontainern.
                                        </p>
                                    </div>
                                    <div class="w-full flex justify-center items-center">
                                        <button
                                            class="hover:text-white text-[#94C12F] border md:border-none border-[#94C12F] duration-500 text-lg font-medium hover:px-4 px-4  lg:px-0 py-1 bg-white hover:bg-[#94C12F] md:bg-[#94C12F] lg:bg-transparent md:px-4 rounded md:text-white lg:text-[#94C12F]">mehr
                                            erfahren
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="">
                        <div
                            class="h-[80vh] md:h-5/6 grid grid-cols-3 grid-rows-2 md:grid-rows-none rounded overflow-hidden ">
                            <div class="row-span-1  col-span-3  md:col-span-1 h-full  flex justify-center items-center">
                                <div
                                    class="w-[90%]  rounded-xl overflow-hidden  h-[80%] md:h-[90%] flex justify-center items-center">
                                    <img class="w-full mx-auto h-full "
                                        src="/img/images/schmid_logsitik_berlin_regionale_umzuege-300x300.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-span-3 row-span-1  md:col-span-2  h-full  flex justify-center items-center">
                                <div class="mx-auto space-y-2 w-11/12">
                                    <div>
                                        <p class="text-lg font-semibold">Nationaler Logistikverkehr</p>
                                    </div>
                                    <div>
                                        <p class=" text-md font-light">
                                            Wir bieten maßgeschneiderte Umzugslösungen für Privatkunden, einschließlich des
                                            sicheren Transports von Tresoren, Klavieren und wertvollen Kunstwerken.
                                        </p>
                                    </div>
                                    <div class="w-full flex justify-center items-center">
                                        <button
                                            class="hover:text-white text-[#94C12F] border md:border-none border-[#94C12F] duration-500 text-lg font-medium hover:px-4 px-4  lg:px-0 py-1 bg-white hover:bg-[#94C12F] md:bg-[#94C12F] lg:bg-transparent md:px-4 rounded md:text-white lg:text-[#94C12F]">mehr
                                            erfahren
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="">
                        <div
                            class="h-[80vh] md:h-5/6 grid grid-cols-3 grid-rows-2 md:grid-rows-none rounded overflow-hidden ">
                            <div class="row-span-1  col-span-3  md:col-span-1 h-full  flex justify-center items-center">
                                <div
                                    class="w-[90%]  rounded-xl overflow-hidden  h-[80%] md:h-[90%] flex justify-center items-center">
                                    <img class="w-full mx-auto h-full "
                                        src="/img/images/schmid_logsitik_berlin_nachlassverwaltung-300x300.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-span-3 row-span-1  md:col-span-2  h-full  flex justify-center items-center">
                                <div class="mx-auto space-y-2 w-11/12">
                                    <div>
                                        <p class="text-lg font-semibold">Nachlassverwaltung</p>
                                    </div>
                                    <div>
                                        <p class=" text-md font-light">
                                            Wir unterstützen Sie bei der respektvollen und sorgenfreien Verwaltung von
                                            Nachlässen und Erbschaften.
                                        </p>
                                    </div>
                                    <div class="w-full flex justify-center items-center">
                                        <button
                                            class="hover:text-white text-[#94C12F] border md:border-none border-[#94C12F] duration-500 text-lg font-medium hover:px-4 px-4  lg:px-0 py-1 bg-white hover:bg-[#94C12F] md:bg-[#94C12F] lg:bg-transparent md:px-4 rounded md:text-white lg:text-[#94C12F]">mehr
                                            erfahren
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="">
                        <div
                            class="h-[80vh] md:h-5/6 grid grid-cols-3 grid-rows-2 md:grid-rows-none rounded overflow-hidden ">
                            <div class="row-span-1  col-span-3  md:col-span-1 h-full  flex justify-center items-center">
                                <div
                                    class="w-[90%]  rounded-xl overflow-hidden  h-[80%] md:h-[90%] flex justify-center items-center">
                                    <img class="w-full mx-auto h-full "
                                        src="/img/images/schmid_logsitik_berlin_bueroaufloesung_haushaltsaufloesung-300x300.jpg"
                                        alt="">
                                </div>
                            </div>
                            <div class="col-span-3 row-span-1  md:col-span-2  h-full  flex justify-center items-center">
                                <div class="mx-auto space-y-2 w-11/12">
                                    <div>
                                        <p class="text-lg font-semibold">Büro- und Haushaltsauflösung</p>
                                    </div>
                                    <div>
                                        <p class=" text-md font-light">
                                            Lassen Sie sich von unserem erfahrenen Team bei der reibungslosen und
                                            professionellen Auflösung von Büros und Haushalten unterstützen.
                                        </p>
                                    </div>
                                    <div class="w-full flex justify-center items-center">
                                        <button
                                            class="hover:text-white text-[#94C12F] border md:border-none border-[#94C12F] duration-500 text-lg font-medium hover:px-4 px-4  lg:px-0 py-1 bg-white hover:bg-[#94C12F] md:bg-[#94C12F] lg:bg-transparent md:px-4 rounded md:text-white lg:text-[#94C12F]">mehr
                                            erfahren
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="">
                        <div
                            class="h-[80vh] md:h-5/6 grid grid-cols-3 grid-rows-2 md:grid-rows-none rounded overflow-hidden ">
                            <div class="row-span-1  col-span-3  md:col-span-1 h-full  flex justify-center items-center">
                                <div
                                    class="w-[90%]  rounded-xl overflow-hidden  h-[80%] md:h-[90%] flex justify-center items-center">
                                    <img class="w-full mx-auto h-full "
                                        src="/img/images/schmid_logsitik_berlin_lagerung-300x300.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-span-3 row-span-1  md:col-span-2  h-full  flex justify-center items-center">
                                <div class="mx-auto space-y-2 w-11/12">
                                    <div>
                                        <p class="text-lg font-semibold">Lagerung</p>
                                    </div>
                                    <div>
                                        <p class=" text-md font-light">
                                            Entdecken Sie unsere flexiblen Selfstorage-Kabinen in verschiedenen Größen für
                                            kurz- oder langfristige Lagerlösungen.
                                        </p>
                                    </div>
                                    <div class="w-full flex justify-center items-center">
                                        <button
                                            class="hover:text-white text-[#94C12F] border md:border-none border-[#94C12F] duration-500 text-lg font-medium hover:px-4 px-4  lg:px-0 py-1 bg-white hover:bg-[#94C12F] md:bg-[#94C12F] lg:bg-transparent md:px-4 rounded md:text-white lg:text-[#94C12F]">mehr
                                            erfahren
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="">
                        <div
                            class="h-[80vh] md:h-5/6 grid grid-cols-3 grid-rows-2 md:grid-rows-none rounded overflow-hidden ">
                            <div class="row-span-1  col-span-3  md:col-span-1 h-full  flex justify-center items-center">
                                <div
                                    class="w-[90%]  rounded-xl overflow-hidden  h-[80%] md:h-[90%] flex justify-center items-center">
                                    <img class="w-full mx-auto h-full "
                                        src="/img/images/schmid_logsitik_berlin_schulung_logistikunternehmen-300x300.jpg"
                                        alt="">
                                </div>
                            </div>
                            <div class="col-span-3 row-span-1  md:col-span-2  h-full  flex justify-center items-center">
                                <div class="mx-auto space-y-2 w-11/12">
                                    <div>
                                        <p class="text-lg font-semibold">Coaching von Logistikunternehmen</p>
                                    </div>
                                    <div>
                                        <p class=" text-md font-light">
                                            Optimieren Sie Ihre Logistikabläufe und Kundenzufriedenheit mit unseren auf Ihre
                                            Bedürfnisse zugeschnittenen Seminaren und Schulungen.
                                        </p>
                                    </div>
                                    <div class="w-full flex justify-center items-center">
                                        <button
                                            class="hover:text-white text-[#94C12F] border md:border-none border-[#94C12F] duration-500 text-lg font-medium hover:px-4 px-4  lg:px-0 py-1 bg-white hover:bg-[#94C12F] md:bg-[#94C12F] lg:bg-transparent md:px-4 rounded md:text-white lg:text-[#94C12F]">mehr
                                            erfahren
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="h-[80vh]  w-full flex flex-col justify-center items-center relative">
            <div class="w-11/12 md:w-9/12 lg:w-[48%]  mx-auto h-5/6 rounded absolute backdrop-blur-2xl">
                <div class="h-1/2  relative">
                    <div class="w-full h-full absolute bg-gradient-to-br from-black bg-opacity-40 p-4 grid grid-cols-2">
                        <div class="text-2xl md:text-4xl text-white  font-semibold">
                            <p>{{ $t("commentOptimiser") }}</p>
                        </div>
                    </div>
                    <div class="w-full h-full">
                        <img class="w-full h-full object-cover object-top" src="/img/images/banner-1.jpeg" alt="">
                    </div>
                </div>
                <div class="w-full h-1/2 absolute bg-slate-400 p-3 md:p-6 grid grid-cols-2">
                    <div class=" text-white text-left leading-6  text-xs md:text-md lg:text-sm font-semibold">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptates consequatur veniam
                            earum eaque minus corporis optio beatae. Illum delectus accusantium quam dolor qui, maiores
                            aliquid eligendi officiis aut expedita.
                        </p>
                    </div>
                    <div class=" text-white text-right leading-6 text-xs md:text-md lg:text-sm font-semibold">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptates consequatur veniam
                            earum eaque minus corporis optio beatae. Illum delectus accusantium quam dolor qui, maiores
                            aliquid eligendi officiis aut expedita.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-11/12 mx-auto h-4/6 hidden md:block border bg-slate-400 border-[#94C12F]  rounded-lg">
            </div>
        </div>
        <div class="w-11/12 mx-auto flex flex-col justify-center items-center ">
            <div class="">
                <button class="bg-[#94C12F] text-white px-5 rounded text-md font-semibold border py-2  border-[#94C12F]">
                    {{ $t("voirnosconseils") }}
                </button>
            </div>
        </div>

        <div class="h-auto  py-3 space-y-5 w-full bg-[#94C12F] mt-4 flex justify-center items-center">
            <div class="w-10/12 md:w-8/12 h-full space-y-2 md:space-y-0 py-3 md:py-0 grid grid-cols-5 gap-3">
                <div
                    class="col-span-full lg:col-span-2  font-semibold text-xl flex items-center justify-center text-white text-center">
                    {{ $t("abonnezvousanotrenewsletter") }}
                </div>
                <div class="col-span-full lg:col-span-3  flex items-center justify-center">
                    <div class="w-10/12  rounded-md overflow-hidden  flex h-9 md:h-12">
                        <div class="w-[70%] h-full bg-white">
                            <input type="email" name=""
                                class="w-full h-full placeholder:font-medium placeholder:text-md text-md px-3 py-1 focus:outline-none"
                                placeholder="example@gmail.com*" id="">
                        </div>
                        <div class="w-[30%] h-full bg-white border-l border-[#94C12F]">
                            <button id="btnModal" class="bg-white h-full w-full  text-md font-semibold text-[#94C12F]">
                                {{ $t('Validez') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div class="text-center">
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">{{
                        $t("commenconsparquelquechosedecgrand") }}
                    </h2>

                    <p class="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">{{ $t('messagejoin') }}</p>

                    <div class="flex flex-col mt-6 sm:flex-row sm:items-center sm:justify-center">
                        <button @click="showOne = true, hide = true"
                            class="w-full px-5 py-4 font-semibold  text-white capitalize transition-colors text-lg duration-300 transform bg-[#94C12F] rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-[#94C12F] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            {{ $t("debutervotredemarche") }}</button>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    <div>
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Product</h3>

                        <div class="flex flex-col items-start mt-4 space-y-4">
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Overview</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Features</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Solutions</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Tutorials</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Pricing</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Releases</a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Company</h3>

                        <div class="flex flex-col items-start mt-4 space-y-4">
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">About
                                us</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Careers</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Press</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">News</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Media
                                kit</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Contact</a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Resources</h3>

                        <div class="flex flex-col items-start mt-4 space-y-4">
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Blog</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Newsletter</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Events</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Help
                                center</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Tutorials</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Supports</a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Use cases</h3>

                        <div class="flex flex-col items-start mt-4 space-y-4">
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Startups</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Enterprise</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Government</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Saas</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Marketplaces</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Ecommerce</a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Social</h3>

                        <div class="flex flex-col items-start mt-4 space-y-4">
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Twitter</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">LinkedIn</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Github</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Facebook</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">AngelList</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Dribble</a>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Legal</h3>

                        <div class="flex flex-col items-start mt-4 space-y-4">
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Terms</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Privacy</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Cookies</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Licenses</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Settings</a>
                            <a href="#"
                                class="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-[#94C12F] hover:underline hover:text-[#94C12F]">Contact</a>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700">

                <div class="flex flex-col items-center justify-between sm:flex-row">
                    <div class="flex font-bold text-xl md:text-3xl text-white justify-center  items-center">
                        <span class="text-[#94C12F]">S</span><span id="last" class="text-white">CHMID</span>
                    </div>

                    <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2023. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Vue3autocounter from 'vue3-autocounter';



export default {
    components: {
        Swiper,
        SwiperSlide,
        'vue3-autocounter': Vue3autocounter,

    },

    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },

    data() {
        return {
            showOne: false,
            showTwo: false,
            hide: false,
            choose: 3,  // 0: particulier, 1: professionnel

        }
    },

    mounted() {

    },

    methods: {
        SelectCategorie(categorie) {
            this.choose = categorie
            this.showTwo = true
        }
    },

}
</script>
<style scoped>
.swiper-slide {
    text-align: center;
    font-size: 18px;
    height: 100%;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>