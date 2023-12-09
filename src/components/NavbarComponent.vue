<template>
    <div>
        <div style="z-index: 100;" id="nav" class="h-20 md:h-48  flex  fixed justify-center items-center w-full ">
            <div class="w-10/12 lg:w-11/12 h-5/6 flex flex-col justify-between items-center ">
                <div class="w-full h-1/5  flex justify-end items-center px-3">
                    <div class="flex space-x-5 text-white">
                        <span @click="changeLanguage('de')" id="link"
                            class="text-lg font-semibold cursor-pointer">Allemand</span>
                        <span @click="changeLanguage('fr')" id="link"
                            class="text-lg font-semibold cursor-pointer">Francais</span>
                        <span @click="changeLanguage('en')" id="link"
                            class="text-lg font-semibold cursor-pointer">Anglais</span>
                    </div>
                </div>
                <div class="w-full h-1/5  grid grid-cols-2">
                    <div class="  flex justify-around items-center">
                        <div class="text-xl font-nunito text-white">
                            <span id="link">autriche</span>
                        </div>

                        <div class="text-xl font-nunito text-white">
                            <span id="link">berlin</span>
                        </div>

                    </div>

                    <div class=" flex justify-end items-center space-x-4 px-3">
                        <div class="text-lg font-nunito text-white">
                            <span id="link">+49 015208601968</span>
                        </div>

                        <div class="text-lg font-nunito text-white">
                            <span id="link">Schmid@umzugode</span>
                        </div>
                    </div>
                </div>
                <div id="bg" class="w-full h-3/5 grid grid-cols-4 bg-white p-4 rounded">
                    <div class="text-black text-3xl text-center font-bold">
                        <p><span class="text-[#94C12F]">S</span>CHMID <span class="text-[#94C12F]">L</span>OGISTIK <span
                                class="text-[#94C12F]">U</span>MZUG</p>
                    </div>
                    <div class="h-full space-x-7 pr-3 items-center flex justify-end col-span-3 ">
                        <div>
                            <a href="#"
                                class="text-lg text-black capitalize  font-semibold  duration-500 hover:text-[#94C12F]">
                                {{ $t("acceuil") }}
                            </a>
                        </div>
                        <div>
                            <button @click="closeOption1" href="#"
                                class="text-lg capitalize text-black  font-semibold  duration-500 hover:text-[#94C12F]">
                                demenagement
                            </button>
                        </div>
                        <div>
                            <button @click="closeOption2" href="#"
                                class="text-lg capitalize text-black  font-semibold  duration-500 hover:text-[#94C12F]">
                                Performance
                            </button>
                        </div>
                        <div>
                            <a href="#"
                                class="text-lg capitalize text-black  font-semibold  duration-500 hover:text-[#94C12F]">
                                Kontakt
                            </a>
                        </div>


                        <div class=" transition-all">
                            <button class="text-md lg:text-md font-semibold  duration-150">
                                <div class=" relative rounded-full items-center flex justify-center">
                                    <div id="dem"
                                        class=" h-0 overflow-hidden w-80 absolute top-[2.3rem] right-[15rem]  rounded-b bg-white ">
                                        <div class="h-full overflow-y-scroll overflow-hidden">
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>demenagement prive</span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>demenagement senior</span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>demenagement intermediaire</span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>transport exclovier</span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>service emballage</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="dem1"
                                        class="h-0  overflow-hidden w-80 absolute top-[2.3rem] right-[6.9rem]  rounded-b bg-white ">
                                        <div class="h-full overflow-y-scroll overflow-hidden">
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>logistique d'organisation </span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>demenagement senior</span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>montage meuble et cuisine</span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>materiel de demenagement</span>
                                            </div>
                                            <div
                                                class="text-left py-3 duration-500 hover:bg-[#94C12F] hover:text-white font-medium px-3 capitalize">
                                                <span>service d'entrepot</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>

                        </div>

                    </div>
                </div>


            </div>
        </div>

        <div style="z-index:104" :class="errorMessage.length > 0 ? 'w-auto px-5 duration-500' : 'duration-500'"
            class=" text-md w-0 h-14 md:max-w-[35%]  max-w-[80%] space-x-2 overflow-hidden text-white font-medium flex justify-center items-center  bg-red-500 absolute z-50 right-2 top-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>

            <span v-text="errorMessage"></span>
        </div>
        <!-- <div class="h-screen w-screen  bg-transparent" ></div> -->
        <div :class="valid.length > 0 ? 'w-auto px-5 duration-500' : 'duration-500'"
            class=" text-md w-0 h-14 md:max-w-[35%]  max-w-[80%] space-x-2 overflow-hidden text-white font-medium flex justify-center items-center  bg-green-500 absolute z-50 right-2 top-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span v-text="valid"></span>
        </div>
        <router-view name="two"></router-view>
    </div>
</template>
<script>
if (document.querySelector("#nav")) {
    window.onscroll = function () { scrollFunction() };
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("#nav").classList.add("bg-white");
        document.querySelector("#nav").classList.add("duration-500");
        document.querySelector('#bg').classList.remove("rounded");
        document.querySelector('#bg').classList.add("border-t");
        document.querySelector('#nav').classList.add("shadow");

        for (let index = 0; index < document.querySelectorAll("#link").length; index++) {
            document.querySelectorAll("#link")[index].classList.add("text-black");
        }

    } else {
        document.querySelector("#nav").classList.remove("bg-white");
        document.querySelector('#nav').classList.remove("shadow");
        document.querySelector('#bg').classList.add("rounded");
        document.querySelector('#bg').classList.remove("border-t");
        for (let index = 0; index < document.querySelectorAll("#link").length; index++) {
            document.querySelectorAll("#link")[index].classList.remove("text-black")
        }
    }
}



export default {
    beforeRouteLeave() {
        window.emitter.off("AlertError");
    },
    data() {
        return {
            langues: [],
            currentLanguage: "",
            errorMessage: '',
            errorStatus: '',
            warnMessage: '',
            auth: false,
            valid: "",
            ShowNotifs: true
        }
    },

    mounted() {
        localStorage.setItem('langue', 'fr');
        this.currentLanguage = localStorage.getItem("langue");
        this.$i18n.locale = this.currentLanguage;
        this.langues = this.$i18n.availableLocales;
        if (localStorage.getItem('jwtToken')) {
            this.axios.get(this.api + "user", {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("jwtToken")
                }
            }).then(({ data }) => {
                this.$store.state.user = data
                this.user = this.$store.state.user
                this.auth = true
            }).catch(error => {
                console.log(error)
            })
        }

        this.axios.get(this.api + "objet-non-fragile").then(({ data }) => {
            this.$store.state.Objects = data
        }).catch(error => {
            console.log(error)
        })


        window.onclick = function () {

            console.log("ring")
            document.querySelector("#dem").classList.add("bg-red-500")

        }

    },

    created() {
        window.emitter.on("AlertError", (data) => {
            this.music = new Audio(
                "/music/error.mp3",
            )
            this.music.autoplay = true
            this.music.audio = 0.0;
            this.errorMessage = data[0]
            this.errorStatus = data[1]
            setTimeout(() => {
                this.errorStatus = ''
                this.errorMessage = ''
            }, 3000);
        })

        window.emitter.on("AlertWarn", (data) => {
            this.music = new Audio(
                "/music/error.mp3",
            )
            this.music.autoplay = true
            this.music.audio = 0.0;
            this.warnMessage = data[0]
            this.errorStatus = data[1]
            setTimeout(() => {
                this.errorStatus = ''
                this.warnMessage = ''
            }, 3000);
        })

        window.emitter.on("AlertValide", (data) => {
            this.music = new Audio(
                "/music/notification.mp3",
            )
            this.music.autoplay = true
            this.music.audio = 0.0;
            this.valid = data[0]
            setTimeout(() => {
                this.valid = ''
            }, 3000);
        })
    },

    methods: {
        changeLanguage(lan) {
            this.$i18n.locale = lan
            this.currentLanguage = lan
            localStorage.setItem('langue', lan)
        },

        closeOption1() {

            document.querySelector("#dem").classList.add("duration-500")

            if (document.querySelector("#dem").classList.contains("h-0")) {
                document.querySelector("#dem").classList.replace("h-0", 'h-[15rem]')
            } else {
                document.querySelector("#dem").classList.replace("h-[15rem]", 'h-0')
            }
        },
        closeOption2() {
            document.querySelector("#dem1").classList.add("duration-500")

            if (document.querySelector("#dem1").classList.contains("h-0")) {
                document.querySelector("#dem1").classList.replace("h-0", 'h-[15rem]')
            } else {
                document.querySelector("#dem1").classList.replace("h-[15rem]", 'h-0')
            }
        },

        logout() {
            localStorage.removeItem('jwtToken')
            this.auth = false
        },

    },

    computed: {
        api() {
            return this.$store.state.api
        }
    },
}
</script>

<style scoped>
.dropdown:focus-within .dropdown-menu {
    opacity: 1;
    transform: translate(0) scale(1);
    visibility: visible;
}
</style>