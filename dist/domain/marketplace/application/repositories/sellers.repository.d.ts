import { AsyncMaybe } from '@core/logic/maybe';
import { Seller } from '@domain/marketplace/enterprise/entities/user/seller';
export declare abstract class SellersRepository {
    abstract findById(id: string): AsyncMaybe<Seller>;
    abstract findByEmail(email: string): AsyncMaybe<Seller>;
    abstract findByPhone(phone: string): AsyncMaybe<Seller>;
    abstract create(seller: Seller): Promise<Seller>;
}
