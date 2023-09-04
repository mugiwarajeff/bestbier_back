import { Injectable } from "@nestjs/common";
import dayjs from "dayjs";

@Injectable()
export class DateTimeService {


    public getOneDayFutureTimestamp(): number {

        const today = dayjs();

        const tomorrow = today.add(1, "second");

        return tomorrow.unix();
    }

    public verifyIfIsAfter(expireUnix: number): boolean {

        const nowUnix = dayjs().unix();

        if (nowUnix > expireUnix) {
            return true;
        }

        return false;

    }
}   