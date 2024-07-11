export default class CL_programa {
    constructor() {
        this.cntPresonas = 0;
        this.cntMascu = 0;
        this.cntFeme = 0;
    }

    procesarPersonas(personas) {
        this.cntPresonas++;
        if (personas.sexo == "M") {
            this.cntMascu++;
        }
        if (personas.sexo == "F") {
            this.cntFeme++;
        }
    }

    cntPresonas1() {
        return this.cntPresonas;
    }
    cntMascu1() {
        return this.cntMascu;
    }
    cntFeme1() {
        return this.cntFeme;
    }
}