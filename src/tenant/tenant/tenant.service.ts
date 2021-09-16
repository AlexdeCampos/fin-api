import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class TenantService {
  private account: Account | null = null;

  constructor(@InjectModel(Account) private accountModule: typeof Account) {}

  get tenant() {
    return this.account;
  }

  set tenant(tenant: Account) {
    this.account = tenant;
  }
  async setTenantBy(subdomain: string) {
    this.tenant = await this.accountModule.findOne({
      where: { subdomain },
      rejectOnEmpty: true,
    });
  }
}
