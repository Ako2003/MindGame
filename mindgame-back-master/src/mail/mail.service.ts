import { Injectable } from '@nestjs/common';
import { CreateConfirmMailDto } from './dto/createConfirmMail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}
}
