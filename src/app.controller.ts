import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello Yury!' };
  }

  @Get('software')
  @Render('pages/software')
  software_index() {
    
  }

  @Get('music')
  @Render('pages/music')
  music_index() {
    
  }

  @Get('hobbies')
  @Render('pages/hobbies')
  hobbies_index() {
    
  }

  @Get('contact')
  @Render('pages/contact')
  contact_index() {
    
  }
}
