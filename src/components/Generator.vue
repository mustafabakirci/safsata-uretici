<template>
  <div class="generator">
    <div class="inner">
        <form @submit.prevent="generateSafsata">
            <input type="text" v-model="input" minlength="5" required placeholder="vergiler çok fazla">
            <button type="submit">ÜRET</button>
        </form>
        <div class="shortcuts">
            <button type="button" v-for="item in shortcuts" :key="item" @click="fastSafsata(item)">{{item}}</button>
        </div>
    </div>
    <div class="result">
        {{result.replace("SAFSATA", input)}}
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            input: "",
            shortcuts: [
                "vergiler çok fazla",
                "alım gücümüz düştü",
                "dolar çok yüksek"
            ],
            safsatalar: 
            [
                "Ülke yanıyor bunlar SAFSATA peşinde.", 
                "Almanya'da, Fransa'da da SAFSATA. Ondan da bahsettiniz mi?",
                "Evet SAFSATA ama CEHAPE'nin bu ülkede bir tane çivi çakmışlığı var mı?",
                "Ülkede özgürlük olmasa SAFSATA diye tweet atabilir miydin?",
                "SAFSATA diyenler teröristtir.",
                "SAFSATA diyorsun ama telefonunu çıkar bir bakalım!",
                "SAFSATA falan bırakın bu işleri. Kılıçdaroğlu SSK'yı batırmadı mı?",
                "Eskiden buzdolabı, fırın bulabiliyor muydunuz? Şimdi SAFSATA demenin bir anlamı yok. ",
                "SAFSATA diyenlerin ar damarları çatlamış, şeref ve haysiyet ölçüleri kaybolmuştur.",
                "Yarım gazeteciler, çeyrek aydınlar ancak SAFSATA derler."
            ],
            result: ""
        }
    },
    methods: {
        fastSafsata (value) {
            this.input = value
            this.generateSafsata()
        },
        generateSafsata () {
            var randomText = this.safsatalar[(Math.random() * this.safsatalar.length) | 0]
            this.result = randomText
        }
    }
}
</script>

<style lang="scss" scoped>
    .generator {
        min-height: calc(100vh - 100px);
        background: url(~@/assets/bg.jpg) no-repeat center center;
        background-size: cover;
        width: calc(100% - 120px);
        position: relative;
        box-shadow: 6px -7px 18px -19px rgba(0,0,0,0.58);
        
        @include screen-down(sm) {
            /* height: auto; */
            overflow: hidden;
            width: 100%;
            padding: 30px;
            form {
                width: 100%;
                input {
                    width: calc(100% - 98px);
                }
            }
        }
        .inner {
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            padding-top: 150px;
            align-items: center;
            justify-content: center;
            @include screen-down(sm) {
                padding-top: 30px;
                margin-bottom: 35px;
            }
            input {
                height: 55px;
                background: #fff;
                min-width: 400px;
                padding: 0 25px;
                @include screen-down(sm) {
                    min-width: unset;
                }
            }
            button {
                background: #002c46;
                color: #fff;
                height: 55px;
                padding: 0 30px;
                font-weight: 600;
            }
            .shortcuts {
                margin-top: 20px;
                @include screen-down(sm) {
                    width: calc(100% + 60px);
                    margin-right: -60px;
                    flex-wrap: nowrap;
                    overflow: hidden;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    -ms-overflow-style: -ms-autohiding-scrollbar;
                    -ms-scroll-snap-type: x mandatory;
                    scroll-snap-type: x mandatory;
                    display: flex;
                    &::-webkit-scrollbar {
                    display: none; 
                    }  
                    >* {
                    //   scroll-snap-align:end;
                    order: 3;
                    }
                    &::after {
                    content: "";
                    min-width: 30px;
                    width: 30px;
                    height: 15px;
                    display: block;
                    order: 4;
                    margin-left: 20px;
                    }
                }
                button {
                    background: $soft-white;
                    color: #002c46;
                    height: 40px;
                    padding: 0 15px;
                    font-size: 14px;
                    white-space: nowrap;
                    +button {
                        margin-left: 10px;
                    }
                }
            }
        }
        .result {
            padding: 25px;
            text-align: center;
            background: $white;
            font-size: 45px;
            min-height: 350px;
            font-weight: 600;
            line-height: 1.2;
            color: #002c46;
            width: 100%;
            @include screen-up(sm) {
                position: absolute;
                right: -120px;
                bottom: 0;
                max-height: 550px;
                min-width: 500px;
                max-width: 650px;
                padding: 85px;
                text-align: left;
            }
        }
    }

</style>