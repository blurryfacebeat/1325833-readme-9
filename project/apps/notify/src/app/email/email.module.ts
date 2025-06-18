import { Module } from '@nestjs/common';
import { EmailConsumer } from './email.consumer';
import { EmailService } from './email.service';

@Module({
  providers: [EmailService, EmailConsumer],
})
export class EmailModule {}
