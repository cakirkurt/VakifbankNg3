import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects : Project[] = [
    new Project(1, 'Kampanya YÖNETİMİ','Dönemlik kampanya yönetim ve paylaşım uygulaması',
                1,0.3,[
                    new Task(1,'Redis cache mekanizmasının inşası',new Date(2022,0,15),1),
                    new Task(2,'Hangfire konfigürasyonunu yapılması.',new Date(2022,0,15),1)
                   ]
    ),
    new Project(2, 'KURYE TAKİP Uygulaması','Basılan kartların ulaşımının takip edilmesi',
                2,0.4,[
                    new Task(3,'Kurye firmalarıyla entegrasyon',new Date(2022,0,15),2),
                    new Task(4,'Ortak havuzda API geliştirilmesi',new Date(2022,0,15),2)
                   ]
    ),
     new Project(3, 'FAKE Project 3 ','Fake Project Description 3',
                2,0.4,[
                    new Task(5,'FT 1',new Date(2022,0,15),3),
                    new Task(6,'FT 2',new Date(2022,0,15),3)
                   ]
    ),
    new Project(4, 'Fake PROJECT 4','Fake Project Description 4',
    3,0.4,[
        new Task(7,'FT 3',new Date(2022,0,15),4),
        new Task(8,'FT 4',new Date(2022,0,15),4)
       ]
)

]