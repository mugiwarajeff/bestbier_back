import { Module } from "@nestjs/common";
import { DeskController } from "./desks.controller";
import { DeskService } from "./desks.service";
import { PrismaService } from "src/common/services/prisma.service";

@Module(
    {
        controllers: [DeskController],
        providers: [DeskService, PrismaService]
    }
)
export class DeskModule { }