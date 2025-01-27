export interface FormData {
   name: string;
   email: string;
   subject: string;
   message: string;
}

export interface FormErrors {
   name?: string;
   email?: string;
   subject?: string;
   message?: string;
}

export interface QuoteFormData {
   gname: string;
   gemail: string;
   gmobile: string;
   gservice: string;
   gmessage: string;
}

export interface QuoteErrors {
   gname?: string;
   gemail?: string;
   gmobile?: string;
   gservice?: string;
   gmessage?: string;
}
