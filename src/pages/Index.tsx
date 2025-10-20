import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'applicant' | 'mobile'>('home');

  const specialties = [
    {
      title: 'Программирование',
      description: 'Разработка ПО и веб-приложений',
      duration: '3 года 10 месяцев',
      icon: 'Code2',
      avgSalary: '80 000 ₽'
    },
    {
      title: 'Экономика и бухучёт',
      description: 'Финансы и управление',
      duration: '2 года 10 месяцев',
      icon: 'TrendingUp',
      avgSalary: '60 000 ₽'
    },
    {
      title: 'Дизайн',
      description: 'Графический и веб-дизайн',
      duration: '3 года 10 месяцев',
      icon: 'Palette',
      avgSalary: '70 000 ₽'
    }
  ];

  const teachers = [
    {
      name: 'Иванова Елена Петровна',
      position: 'Директор колледжа',
      degree: 'Кандидат педагогических наук',
      image: 'https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/17e3f206-3c4b-44de-81be-21a3b6e0e993.jpg'
    },
    {
      name: 'Смирнов Андрей Викторович',
      position: 'Зам. директора по учебной работе',
      degree: 'Кандидат технических наук',
      image: 'https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/17e3f206-3c4b-44de-81be-21a3b6e0e993.jpg'
    },
    {
      name: 'Козлова Мария Сергеевна',
      position: 'Преподаватель информатики',
      degree: 'Высшая квалификационная категория',
      image: 'https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/17e3f206-3c4b-44de-81be-21a3b6e0e993.jpg'
    }
  ];

  const news = [
    {
      title: 'День открытых дверей 25 октября',
      date: '15 октября 2025',
      category: 'Мероприятие'
    },
    {
      title: 'Победа в олимпиаде по программированию',
      date: '10 октября 2025',
      category: 'Достижение'
    },
    {
      title: 'Новое оборудование для лабораторий',
      date: '5 октября 2025',
      category: 'Новость'
    }
  ];

  const allSpecialties = [
    {
      title: 'Программирование',
      description: 'Разработка программного обеспечения, веб-приложений и мобильных приложений',
      skills: 'Python, JavaScript, React, SQL, Git',
      career: 'Программист, веб-разработчик, fullstack-разработчик',
      salary: '80 000 - 150 000 ₽'
    },
    {
      title: 'Экономика и бухгалтерский учёт',
      description: 'Ведение бухгалтерского учёта, финансовый анализ, налогообложение',
      skills: '1С, Excel, бухгалтерский учёт, налоговое право',
      career: 'Бухгалтер, экономист, финансовый аналитик',
      salary: '60 000 - 100 000 ₽'
    },
    {
      title: 'Графический дизайн',
      description: 'Создание визуального контента, брендинг, UI/UX дизайн',
      skills: 'Photoshop, Illustrator, Figma, типографика',
      career: 'Графический дизайнер, UI/UX дизайнер, арт-директор',
      salary: '70 000 - 120 000 ₽'
    },
    {
      title: 'Туризм',
      description: 'Организация туристических маршрутов и обслуживание клиентов',
      skills: 'География, иностранные языки, менеджмент',
      career: 'Менеджер по туризму, турагент, гид-переводчик',
      salary: '50 000 - 90 000 ₽'
    },
    {
      title: 'Юриспруденция',
      description: 'Правовое сопровождение бизнеса и физических лиц',
      skills: 'Гражданское право, трудовое право, судопроизводство',
      career: 'Юрист, помощник адвоката, специалист по кадрам',
      salary: '65 000 - 110 000 ₽'
    },
    {
      title: 'Маркетинг',
      description: 'Продвижение товаров и услуг, digital-маркетинг',
      skills: 'SMM, контекстная реклама, аналитика, копирайтинг',
      career: 'Маркетолог, SMM-менеджер, бренд-менеджер',
      salary: '60 000 - 110 000 ₽'
    }
  ];

  const faqs = [
    {
      question: 'Какие документы нужны для поступления?',
      answer: 'Паспорт, аттестат об основном общем образовании (9 классов) или среднем общем образовании (11 классов), 6 фотографий 3х4, медицинская справка формы 086/у.'
    },
    {
      question: 'Есть ли общежитие?',
      answer: 'Да, колледж предоставляет общежитие для иногородних студентов. Общежитие расположено в 10 минутах ходьбы от учебного корпуса, есть все удобства.'
    },
    {
      question: 'Какая стипендия?',
      answer: 'Академическая стипендия составляет от 2 000 до 5 000 рублей в зависимости от успеваемости. Также предусмотрены повышенные стипендии за отличную учёбу и участие в олимпиадах.'
    },
    {
      question: 'Помогаете ли с трудоустройством?',
      answer: 'Да, у колледжа есть соглашения с более чем 50 компаниями-партнёрами. Мы гарантируем помощь в трудоустройстве всем выпускникам.'
    }
  ];

  const schedule = [
    { time: '09:00 - 10:30', monday: 'Математика', tuesday: 'Программирование', wednesday: 'Английский язык' },
    { time: '10:45 - 12:15', monday: 'Физика', tuesday: 'Базы данных', wednesday: 'История' },
    { time: '12:30 - 14:00', monday: 'Программирование', tuesday: 'Математика', wednesday: 'Web-разработка' },
    { time: '14:15 - 15:45', monday: 'Физкультура', tuesday: 'Литература', wednesday: 'Физика' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" className="text-accent-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Перспектива</h1>
                <p className="text-sm opacity-90">Коммерческий колледж</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => setCurrentPage('home')} className={`hover:text-accent transition-colors ${currentPage === 'home' ? 'text-accent' : ''}`}>
                Главная
              </button>
              <button onClick={() => setCurrentPage('about')} className={`hover:text-accent transition-colors ${currentPage === 'about' ? 'text-accent' : ''}`}>
                О колледже
              </button>
              <button onClick={() => setCurrentPage('applicant')} className={`hover:text-accent transition-colors ${currentPage === 'applicant' ? 'text-accent' : ''}`}>
                Абитуриенту
              </button>
              <button onClick={() => setCurrentPage('mobile')} className={`hover:text-accent transition-colors ${currentPage === 'mobile' ? 'text-accent' : ''}`}>
                Моб. приложение
              </button>
              <Button variant="secondary" size="sm">
                Личный кабинет
              </Button>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Главная
                  </button>
                  <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    О колледже
                  </button>
                  <button onClick={() => { setCurrentPage('applicant'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Абитуриенту
                  </button>
                  <button onClick={() => { setCurrentPage('mobile'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Моб. приложение
                  </button>
                  <Button variant="secondary" className="mt-4">
                    Личный кабинет
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {currentPage === 'home' && (
        <>
          <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
            <img
              src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/fde52b47-5971-42c7-a79f-1688fa0e0fcc.jpg"
              alt="Студенты колледжа"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 text-center text-white px-4">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Образование для успешной карьеры
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Современное образование с гарантией трудоустройства
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                Подать заявку на обучение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
          </section>

          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Briefcase" className="text-accent-foreground" size={32} />
                    </div>
                    <CardTitle className="text-2xl">Гарантированное трудоустройство</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Партнёрство с 50+ компаниями. 95% выпускников трудоустроены в первый год.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" className="text-accent-foreground" size={32} />
                    </div>
                    <CardTitle className="text-2xl">Доступная цена</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      От 60 000 ₽ в год. Рассрочка без процентов. Стипендии для отличников.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" className="text-accent-foreground" size={32} />
                    </div>
                    <CardTitle className="text-2xl">Практический подход</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      70% времени — практика. Современное оборудование и лаборатории.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-center mb-12">Популярные специальности</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {specialties.map((specialty, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                        <Icon name={specialty.icon as any} className="text-primary-foreground" size={28} />
                      </div>
                      <CardTitle className="text-2xl">{specialty.title}</CardTitle>
                      <CardDescription className="text-base">{specialty.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Clock" size={16} className="text-muted-foreground" />
                          <span>{specialty.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Banknote" size={16} className="text-muted-foreground" />
                          <span className="font-semibold text-accent">{specialty.avgSalary}</span>
                        </div>
                        <Button className="w-full mt-4">Подробнее</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h3 className="text-4xl font-bold text-center mb-12">Последние новости</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {news.map((item, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
                    <CardHeader>
                      <Badge className="w-fit mb-2">{item.category}</Badge>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Все новости
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-6">Готовы начать обучение?</h3>
              <p className="text-xl mb-8 opacity-90">Подайте заявку сейчас и получите скидку 10% на первый семестр</p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Подать заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </div>
          </section>
        </>
      )}

      {currentPage === 'about' && (
        <>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-12">О колледже Перспектива</h2>
              
              <div className="max-w-4xl mx-auto mb-16">
                <Card>
                  <CardContent className="p-8">
                    <p className="text-lg leading-relaxed mb-4">
                      Коммерческий колледж «Перспектива» — современное образовательное учреждение, созданное в 2005 году. 
                      За 20 лет работы мы выпустили более 5000 квалифицированных специалистов, которые успешно работают 
                      в ведущих компаниях России.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Наша миссия — предоставить качественное профессиональное образование, которое открывает путь 
                      к успешной карьере. Мы сочетаем академические знания с практическими навыками, необходимыми 
                      современному рынку труда.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-4xl font-bold text-center mb-12">Руководящий и педагогический состав</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {teachers.map((teacher, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow">
                    <CardHeader className="text-center">
                      <Avatar className="w-32 h-32 mx-auto mb-4">
                        <AvatarImage src={teacher.image} alt={teacher.name} />
                        <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-xl">{teacher.name}</CardTitle>
                      <CardDescription className="text-base">{teacher.position}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="secondary">{teacher.degree}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-4xl font-bold text-center mb-12">Виртуальный тур по колледжу</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/aa010968-a399-45e8-9f51-bc055d042f40.jpg"
                    alt="Холл колледжа"
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Главный холл</CardTitle>
                    <CardDescription>Просторное пространство для отдыха студентов</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/fde52b47-5971-42c7-a79f-1688fa0e0fcc.jpg"
                    alt="Аудитория"
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Учебные аудитории</CardTitle>
                    <CardDescription>Современное оборудование для комфортного обучения</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Контакты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Icon name="MapPin" size={24} className="text-accent mt-1" />
                          <div>
                            <p className="font-semibold">Адрес:</p>
                            <p className="text-muted-foreground">г. Москва, ул. Образцова, д. 15</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Phone" size={24} className="text-accent mt-1" />
                          <div>
                            <p className="font-semibold">Телефон:</p>
                            <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Icon name="Mail" size={24} className="text-accent mt-1" />
                          <div>
                            <p className="font-semibold">Email:</p>
                            <p className="text-muted-foreground">info@perspektiva-college.ru</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg flex items-center justify-center h-64">
                        <Icon name="Map" size={48} className="text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === 'applicant' && (
        <>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-5xl font-bold text-center mb-12">Информация для абитуриентов</h2>

              <div className="mb-16">
                <h3 className="text-4xl font-bold text-center mb-12">Специальности</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {allSpecialties.map((specialty, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all">
                      <CardHeader>
                        <CardTitle className="text-2xl">{specialty.title}</CardTitle>
                        <CardDescription className="text-base">{specialty.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold mb-1">Навыки:</p>
                            <p className="text-sm text-muted-foreground">{specialty.skills}</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Карьерные перспективы:</p>
                            <p className="text-sm text-muted-foreground">{specialty.career}</p>
                          </div>
                          <div className="flex items-center gap-2 pt-2">
                            <Icon name="Banknote" size={18} className="text-accent" />
                            <span className="font-semibold text-accent">{specialty.salary}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Приёмная кампания 2025</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Сроки подачи документов:</h4>
                          <p className="text-muted-foreground">15 июня — 15 августа 2025</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Вступительные испытания:</h4>
                          <p className="text-muted-foreground">Не требуются. Зачисление по среднему баллу аттестата.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Количество мест:</h4>
                          <p className="text-muted-foreground">300 бюджетных мест, 200 платных</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Необходимые документы:</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Паспорт (копия)</li>
                            <li>Аттестат об образовании</li>
                            <li>6 фотографий 3×4</li>
                            <li>Медицинская справка 086/у</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-16">
                <h3 className="text-4xl font-bold text-center mb-12">Частые вопросы</h3>
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Связаться с приёмной комиссией</CardTitle>
                    <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 font-medium">Имя</label>
                          <Input placeholder="Иван" />
                        </div>
                        <div>
                          <label className="block mb-2 font-medium">Фамилия</label>
                          <Input placeholder="Иванов" />
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">Email</label>
                        <Input type="email" placeholder="ivan@example.com" />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">Телефон</label>
                        <Input type="tel" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">Интересующая специальность</label>
                        <Input placeholder="Например: Программирование" />
                      </div>
                      <div>
                        <label className="block mb-2 font-medium">Вопрос</label>
                        <Textarea placeholder="Опишите ваш вопрос..." rows={4} />
                      </div>
                      <Button size="lg" className="w-full md:w-auto">
                        Отправить заявку
                        <Icon name="Send" className="ml-2" size={18} />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === 'mobile' && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">Мобильное приложение</h2>

            <div className="max-w-md mx-auto">
              <Tabs defaultValue="welcome" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="welcome">Приветствие</TabsTrigger>
                  <TabsTrigger value="login">Вход</TabsTrigger>
                  <TabsTrigger value="main">Главная</TabsTrigger>
                </TabsList>

                <TabsContent value="welcome">
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name="GraduationCap" size={48} className="text-accent-foreground" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">Добро пожаловать!</h3>
                      <p className="text-lg mb-8 opacity-90">
                        Мобильное приложение колледжа «Перспектива» — всё для учёбы в одном месте
                      </p>
                      <Button variant="secondary" size="lg" className="w-full">
                        Начать
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="login">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">Вход в систему</CardTitle>
                      <CardDescription className="text-center">Используйте логин и пароль студента</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div>
                          <label className="block mb-2 font-medium">Номер студенческого</label>
                          <Input placeholder="СТ-12345" />
                        </div>
                        <div>
                          <label className="block mb-2 font-medium">Пароль</label>
                          <Input type="password" placeholder="••••••••" />
                        </div>
                        <Button className="w-full" size="lg">
                          Войти
                        </Button>
                        <button className="text-sm text-accent hover:underline w-full text-center">
                          Забыли пароль?
                        </button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="main">
                  <div className="space-y-4">
                    <Card className="bg-primary text-primary-foreground">
                      <CardHeader>
                        <CardTitle className="text-lg">Текущая пара</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-2xl font-bold">Программирование</p>
                          <div className="flex items-center gap-2 opacity-90">
                            <Icon name="MapPin" size={16} />
                            <span>Аудитория 305</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-90">
                            <Icon name="User" size={16} />
                            <span>Козлова М.С.</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-90">
                            <Icon name="Clock" size={16} />
                            <span>10:45 - 12:15</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Следующая пара</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <p className="font-semibold">Базы данных</p>
                          <p className="text-muted-foreground">Аудитория 402 • 12:30 - 14:00</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Расписание на неделю</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {schedule.map((item, index) => (
                            <div key={index} className="border-l-4 border-accent pl-3 py-2">
                              <p className="text-sm font-semibold">{item.time}</p>
                              <p className="text-sm text-muted-foreground">Пн: {item.monday}</p>
                              <p className="text-sm text-muted-foreground">Вт: {item.tuesday}</p>
                              <p className="text-sm text-muted-foreground">Ср: {item.wednesday}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Ближайшие события</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon name="Calendar" className="text-accent-foreground" size={20} />
                            </div>
                            <div>
                              <p className="font-semibold">Консультация по математике</p>
                              <p className="text-sm text-muted-foreground">Завтра, 15:00</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon name="AlertCircle" className="text-white" size={20} />
                            </div>
                            <div>
                              <p className="font-semibold">Сдача курсовой работы</p>
                              <p className="text-sm text-muted-foreground">25 октября</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Колледж Перспектива</h4>
              <p className="text-sm opacity-90">Современное образование для успешной карьеры</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>+7 (495) 123-45-67</p>
                <p>info@perspektiva-college.ru</p>
                <p>г. Москва, ул. Образцова, 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Разделы</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p className="cursor-pointer hover:text-accent">О колледже</p>
                <p className="cursor-pointer hover:text-accent">Абитуриенту</p>
                <p className="cursor-pointer hover:text-accent">Студентам</p>
                <p className="cursor-pointer hover:text-accent">Новости</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                  <Icon name="Mail" className="text-accent-foreground" size={20} />
                </div>
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                  <Icon name="Phone" className="text-accent-foreground" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>© 2025 Коммерческий колледж «Перспектива». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
