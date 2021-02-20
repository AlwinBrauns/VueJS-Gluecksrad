function zufallsZahl(min,max){
    return (Math.random() * (max-min))+min;
}

const fps = 60;

const app = Vue.createApp({
    data() {
        return {
            titel: 'Glücksrad',
            winkel: 0.0,
            isSpinning: false,
            result: null,
        }
    },
    computed: {
        gewonnen(){
            if(!this.result) return;
            return {backgroundColor: 'rgb(56, 214, 16)', borderRadius: '10px',color: 'white', fontWeight: 'bolder'};
        },
        resultFarbe(){
            switch (15-Math.floor((this.winkel)/(360/16))%16) {
                case 0:
                    return 'Blau';
                    break;
                case 1:
                    return 'Blau';
                    break;
                case 2:
                    return 'Grün';
                    break;
                case 3:
                    return 'Grün';
                    break;
                case 4:
                    return 'Gelb';
                    break;
                case 5:
                    return 'Lila';
                    break;
                case 6:
                    return 'Pink';
                    break;
                case 7:
                    return 'Rot';
                    break;
                case 8:
                    return 'Blau';
                    break;
                case 9:
                    return 'Green';
                    break;
                case 10:
                    return 'Gelb';
                    break;
                case 11:
                    return 'Blau';
                    break;
                case 12:
                    return 'Rot';
                    break;
                case 13:
                    return 'Pink';
                    break;
                case 14:
                    return 'Blau';
                    break;
                case 15:
                    return 'Grün';
                    break;
            }
        },
    },
    methods: {
        drehen(){
            this.result = null;
            this.isSpinning = true;
            let frames = zufallsZahl(fps*7,fps*10)
            this.drehRad(frames);
        },
        drehRad(frames){
            if(frames>0)
            {
                console.log(frames);
                this.winkel = ((this.winkel + 0.001 + (Math.pow(frames, zufallsZahl(3.9,4))/1000000000)) %  360);
                setTimeout(()=>this.drehRad(frames),1000/fps);
                frames = frames - zufallsZahl(0,2);
            }else{
                this.isSpinning = false;
                this.result = this.winkel;
            }
        }
    },
});

app.mount('#app');