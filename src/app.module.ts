import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AcessosModule } from './acessos/acessos.module';
import { EstabelecimentosModule } from './estabelecimentos/estabelecimentos.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt-strategy';
import { Acesso } from './acessos/acesso.entity';
import { Veiculo } from './veiculos/veiculo.entity';
import { Estabelecimento } from './estabelecimentos/estabelecimento.entity';
import { config } from 'dotenv';

config();
console.log(process.env.DB_HOST)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Estabelecimento, Veiculo, Acesso],
      synchronize: true,
    }),
    AcessosModule,
    EstabelecimentosModule,
    VeiculosModule,
    JwtModule.register({
      secret: process.env.JWT_KEY, 
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AppModule {}
