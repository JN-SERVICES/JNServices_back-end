// import { Module } from "@nestjs/common";
// import { TerminusModule } from "@nestjs/terminus";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { HealthController } from "src/controller/health/health.controller";

// @Module({
//     imports: [
//         TypeOrmModule.forRoot({
//             type: 'postgres',
//             url: process.env.DATABASE_URL,
//             autoLoadEntities: true,
//             synchronize: true, 
//         }),
//         TerminusModule,
//         // DummyModule,
//     ],
//     controllers: [HealthController],
// })
// export class AppModule { }