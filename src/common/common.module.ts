import { Module } from "@nestjs/common";
import { PrismaService } from "./services/prisma.service";
import { DateTimeService } from "./services/dateTime.service";

@Module({
    providers: [PrismaService, DateTimeService],
    exports: [PrismaService, DateTimeService]
})
export class CommomModule { };