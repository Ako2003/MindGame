import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Test')
@Controller('test')
export class TestController {
    constructor() {}

    @Get('/test')
    test() {
        return 'Hello World!';
    }
}