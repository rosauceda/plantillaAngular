export class FileItem {

    public archivo: File;
    public nameArchivo: string;
    public url: string;
    public flag_load: boolean;
    public progress: number;

    constructor( archivo: File ) {

        this.archivo = archivo;
        this.nameArchivo = archivo.name;

        this.flag_load = false;
        this.progress = 0;
    }
}
