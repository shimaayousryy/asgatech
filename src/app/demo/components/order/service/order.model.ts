export interface Order{
    
        OrderId: number ;
        OrderDate: string;
        UserId:string;
        Products: product[],
        PaymentType: string;
    
}

export class product{
    ProductId: number;
     Quantity: number 
}