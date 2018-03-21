import { Get, Controller } from '@nestjs/common';

@Controller('lexeme')
export class LexemeController {
    @Get()
    root(): string {
        return 'Hello World2!'
    }
}
