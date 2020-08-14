import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteModule } from './note';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user_1:homnaybanangi@rest.1ipig.mongodb.net/Rest?retryWrites=true&w=majority',
    ),
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// mongoose.connect('');
