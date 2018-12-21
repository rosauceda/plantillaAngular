export class User {

    constructor(
        public name: string,
        public last_name: string,
        public email: string,
        public password?: string,
        public branch_id?: string,
        public aka?: string,
        public notes?: string,
        public phone?: string,
        public active_flag: boolean = true,
        public remember_token?: string,
        public api_token?: string,
    ) { }

}

