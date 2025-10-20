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
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'applicant' | 'students' | 'process' | 'news' | 'life' | 'career' | 'mobile'>('home');

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

            <nav className="hidden lg:flex items-center gap-4">
              <button onClick={() => setCurrentPage('home')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'home' ? 'text-accent' : ''}`}>
                Главная
              </button>
              <button onClick={() => setCurrentPage('about')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'about' ? 'text-accent' : ''}`}>
                О колледже
              </button>
              <button onClick={() => setCurrentPage('applicant')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'applicant' ? 'text-accent' : ''}`}>
                Абитуриенту
              </button>
              <button onClick={() => setCurrentPage('students')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'students' ? 'text-accent' : ''}`}>
                Студентам
              </button>
              <button onClick={() => setCurrentPage('process')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'process' ? 'text-accent' : ''}`}>
                Учебный процесс
              </button>
              <button onClick={() => setCurrentPage('news')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'news' ? 'text-accent' : ''}`}>
                Новости
              </button>
              <button onClick={() => setCurrentPage('life')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'life' ? 'text-accent' : ''}`}>
                Жизнь студентов
              </button>
              <button onClick={() => setCurrentPage('career')} className={`hover:text-accent transition-colors text-sm ${currentPage === 'career' ? 'text-accent' : ''}`}>
                Карьера
              </button>
              <Button variant="secondary" size="sm">
                Личный кабинет
              </Button>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
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
                  <button onClick={() => { setCurrentPage('students'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Студентам
                  </button>
                  <button onClick={() => { setCurrentPage('process'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Учебный процесс
                  </button>
                  <button onClick={() => { setCurrentPage('news'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Новости
                  </button>
                  <button onClick={() => { setCurrentPage('life'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Жизнь студентов
                  </button>
                  <button onClick={() => { setCurrentPage('career'); setMobileMenuOpen(false); }} className="text-lg text-left hover:text-accent transition-colors">
                    Карьера
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

      {currentPage === 'students' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">Студентам</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Calendar" className="text-primary-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Расписание занятий</CardTitle>
                  <CardDescription>Актуальное расписание пар на неделю</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {schedule.slice(0, 2).map((item, index) => (
                      <div key={index} className="border-l-4 border-accent pl-3 py-2">
                        <p className="text-sm font-semibold">{item.time}</p>
                        <p className="text-sm text-muted-foreground">Понедельник: {item.monday}</p>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4">Полное расписание</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="BookOpen" className="text-accent-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Электронная библиотека</CardTitle>
                  <CardDescription>Доступ к учебным материалам 24/7</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">📚 Более 5000 учебников</p>
                    <p className="text-sm">📄 Методические пособия</p>
                    <p className="text-sm">🎥 Видеолекции</p>
                  </div>
                  <Button className="w-full">Перейти в библиотеку</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-accent-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Стипендии</CardTitle>
                  <CardDescription>Информация о видах стипендий</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Академическая стипендия</p>
                      <p className="text-sm text-muted-foreground">2 000 - 5 000 ₽</p>
                    </div>
                    <div>
                      <p className="font-semibold">Повышенная стипендия</p>
                      <p className="text-sm text-muted-foreground">До 10 000 ₽</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Подробнее</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Home" className="text-primary-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Общежитие</CardTitle>
                  <CardDescription>Комфортное проживание для иногородних</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">🏠 Современные комнаты</p>
                    <p className="text-sm">📶 Бесплатный Wi-Fi</p>
                    <p className="text-sm">🍽️ Столовая и кухня</p>
                    <p className="text-sm">🔒 Охраняемая территория</p>
                  </div>
                  <Button className="w-full">Узнать больше</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Расписание звонков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="font-semibold">1 пара</span>
                      <span className="text-muted-foreground">09:00 - 10:30</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="font-semibold">2 пара</span>
                      <span className="text-muted-foreground">10:45 - 12:15</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="font-semibold">3 пара</span>
                      <span className="text-muted-foreground">12:30 - 14:00</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span className="font-semibold">4 пара</span>
                      <span className="text-muted-foreground">14:15 - 15:45</span>
                    </div>
                  </div>
                  <div className="bg-accent/10 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">Важная информация</h4>
                    <p className="text-sm mb-2">⏰ Перерыв между парами: 15 минут</p>
                    <p className="text-sm mb-2">🍽️ Большой перерыв: 12:15 - 12:30</p>
                    <p className="text-sm">📍 Вечерние занятия: с 16:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {currentPage === 'process' && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">Учебный процесс</h2>

            <div className="mb-16">
              <h3 className="text-4xl font-bold text-center mb-12">Отделения колледжа</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Laptop" className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-2xl">Отделение информационных технологий</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Специальности: программирование, администрирование систем, веб-разработка</p>
                    <Badge>4 специальности</Badge>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon name="TrendingUp" className="text-accent-foreground" size={28} />
                    </div>
                    <CardTitle className="text-2xl">Экономическое отделение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Специальности: бухучёт, финансы, банковское дело, менеджмент</p>
                    <Badge>5 специальностей</Badge>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon name="Palette" className="text-primary-foreground" size={28} />
                    </div>
                    <CardTitle className="text-2xl">Отделение дизайна и творчества</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Специальности: графический дизайн, UI/UX дизайн, реклама</p>
                    <Badge>3 специальности</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-4xl font-bold text-center mb-12">Производственная практика</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/fde52b47-5971-42c7-a79f-1688fa0e0fcc.jpg"
                    alt="Практика в IT компании"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Практика в IT-компаниях</CardTitle>
                    <CardDescription>Студенты работают над реальными проектами в Яндекс, VK, Сбер</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/aa010968-a399-45e8-9f51-bc055d042f40.jpg"
                    alt="Практика в банках"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Практика в финансовых организациях</CardTitle>
                    <CardDescription>Опыт работы в банках и бухгалтерских компаниях</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">График учебного процесса на 2025 год</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                    <Icon name="Calendar" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">1 семестр: сентябрь - декабрь</p>
                      <p className="text-sm text-muted-foreground">Начало занятий: 1 сентября</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                    <Icon name="BookOpen" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Зимняя сессия: 15-30 декабря</p>
                      <p className="text-sm text-muted-foreground">Экзамены и зачёты</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                    <Icon name="Calendar" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">2 семестр: февраль - май</p>
                      <p className="text-sm text-muted-foreground">Начало занятий: 10 февраля</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                    <Icon name="BookOpen" size={24} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Летняя сессия: 25 мая - 15 июня</p>
                      <p className="text-sm text-muted-foreground">Экзамены, защита курсовых работ</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {currentPage === 'news' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">Новости и события</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[...news, ...news].map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-primary to-accent"></div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{item.category}</Badge>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Icon name="Calendar" size={14} />
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Подробная информация о событии. Приглашаем всех студентов и абитуриентов принять участие.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-4xl font-bold text-center mb-12">Афиша мероприятий</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">Олимпиада по программированию</CardTitle>
                        <CardDescription className="flex items-center gap-2 mb-2">
                          <Icon name="Calendar" size={16} />
                          5 ноября 2025, 10:00
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          Актовый зал, корпус А
                        </CardDescription>
                      </div>
                      <Badge className="bg-accent text-accent-foreground">Конкурс</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Городская олимпиада для студентов IT-специальностей. Призовой фонд 100 000 рублей.
                    </p>
                    <Button>Зарегистрироваться</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">День студента</CardTitle>
                        <CardDescription className="flex items-center gap-2 mb-2">
                          <Icon name="Calendar" size={16} />
                          25 января 2026, 15:00
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          Главный корпус
                        </CardDescription>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">Праздник</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Праздничный концерт, конкурсы, розыгрыш призов. Приглашаются все студенты!
                    </p>
                    <Button>Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === 'life' && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">Студенты вне учёбы</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Dumbbell" className="text-accent-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Спортивные секции</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">⚽ Футбол</p>
                    <p className="text-sm">🏀 Баскетбол</p>
                    <p className="text-sm">🏐 Волейбол</p>
                    <p className="text-sm">🥋 Единоборства</p>
                    <p className="text-sm">🏋️ Тренажёрный зал</p>
                  </div>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Music" className="text-primary-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Творческие клубы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm">🎭 Театральная студия</p>
                    <p className="text-sm">🎵 Вокальный ансамбль</p>
                    <p className="text-sm">🎸 Рок-группа</p>
                    <p className="text-sm">🎨 Художественная мастерская</p>
                  </div>
                  <Button className="w-full">Присоединиться</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" className="text-accent-foreground" size={28} />
                  </div>
                  <CardTitle className="text-2xl">Студенческий совет</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Участвуй в организации мероприятий, защищай права студентов, развивай лидерские качества.
                  </p>
                  <Button className="w-full">Подать заявку</Button>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h3 className="text-4xl font-bold text-center mb-12">Мероприятия</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/fde52b47-5971-42c7-a79f-1688fa0e0fcc.jpg"
                    alt="КВН"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Студенческая лига КВН</CardTitle>
                    <CardDescription>Ежегодный турнир между курсами и группами</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/aa010968-a399-45e8-9f51-bc055d042f40.jpg"
                    alt="Выпускной"
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>Торжественный выпускной</CardTitle>
                    <CardDescription>Яркое завершение учёбы в колледже</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <Card>
              <CardHeader>
                <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Utensils" className="text-accent-foreground" size={28} />
                </div>
                <CardTitle className="text-3xl">Столовая</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Режим работы:</h4>
                    <div className="space-y-2">
                      <p className="text-sm">Понедельник - пятница: 08:00 - 17:00</p>
                      <p className="text-sm">Суббота: 09:00 - 15:00</p>
                      <p className="text-sm">Воскресенье: выходной</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Меню:</h4>
                    <div className="space-y-2">
                      <p className="text-sm">🍲 Комплексные обеды от 150 ₽</p>
                      <p className="text-sm">☕ Буфет с выпечкой</p>
                      <p className="text-sm">🥗 Вегетарианские блюда</p>
                      <p className="text-sm">💳 Безналичная оплата</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {currentPage === 'career' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">Карьера и трудоустройство</h2>

            <div className="mb-16">
              <h3 className="text-4xl font-bold text-center mb-12">Наши партнёры-работодатели</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {['Яндекс', 'VK', 'Сбер', 'Тинькофф', 'Ozon', 'Wildberries', 'МТС', 'Ростелеком'].map((company, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Building2" className="text-primary-foreground" size={32} />
                      </div>
                      <p className="font-bold text-lg">{company}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-4xl font-bold text-center mb-12">Ярмарка вакансий</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">Junior Frontend Developer</CardTitle>
                        <CardDescription className="flex items-center gap-2 mb-1">
                          <Icon name="Building2" size={14} />
                          VK
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="MapPin" size={14} />
                          Москва, удалённо
                        </CardDescription>
                      </div>
                      <Badge className="bg-accent text-accent-foreground">60 000 ₽</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Требования: знание React, TypeScript, опыт работы от 6 месяцев
                    </p>
                    <Button className="w-full">Откликнуться</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">Бухгалтер</CardTitle>
                        <CardDescription className="flex items-center gap-2 mb-1">
                          <Icon name="Building2" size={14} />
                          Сбер
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="MapPin" size={14} />
                          Москва
                        </CardDescription>
                      </div>
                      <Badge className="bg-accent text-accent-foreground">70 000 ₽</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Требования: знание 1С, опыт ведения первичной документации
                    </p>
                    <Button className="w-full">Откликнуться</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">UI/UX Designer</CardTitle>
                        <CardDescription className="flex items-center gap-2 mb-1">
                          <Icon name="Building2" size={14} />
                          Ozon
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="MapPin" size={14} />
                          Москва, гибрид
                        </CardDescription>
                      </div>
                      <Badge className="bg-accent text-accent-foreground">80 000 ₽</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Требования: Figma, знание принципов UX, портфолио обязательно
                    </p>
                    <Button className="w-full">Откликнуться</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">Менеджер по продажам</CardTitle>
                        <CardDescription className="flex items-center gap-2 mb-1">
                          <Icon name="Building2" size={14} />
                          МТС
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2">
                          <Icon name="MapPin" size={14} />
                          Москва
                        </CardDescription>
                      </div>
                      <Badge className="bg-accent text-accent-foreground">50 000 ₽</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Требования: коммуникабельность, опыт в продажах приветствуется
                    </p>
                    <Button className="w-full">Откликнуться</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-center mb-12">История успеха выпускников</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/17e3f206-3c4b-44de-81be-21a3b6e0e993.jpg" />
                      <AvatarFallback>АП</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Алексей Петров</CardTitle>
                    <CardDescription>Выпуск 2022, Программирование</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className="mb-3">Senior Developer в Яндекс</Badge>
                    <p className="text-sm text-muted-foreground">
                      "Колледж дал мне отличную базу. Уже через год работы получил повышение!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/17e3f206-3c4b-44de-81be-21a3b6e0e993.jpg" />
                      <AvatarFallback>МИ</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Мария Иванова</CardTitle>
                    <CardDescription>Выпуск 2021, Дизайн</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className="mb-3">Lead Designer в VK</Badge>
                    <p className="text-sm text-muted-foreground">
                      "Практика в реальных проектах помогла быстро найти работу мечты."
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src="https://cdn.poehali.dev/projects/e27a84eb-36b2-4b17-8896-2b625bcc4f37/files/17e3f206-3c4b-44de-81be-21a3b6e0e993.jpg" />
                      <AvatarFallback>ДС</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">Дмитрий Соколов</CardTitle>
                    <CardDescription>Выпуск 2023, Экономика</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className="mb-3">Финансовый аналитик в Сбер</Badge>
                    <p className="text-sm text-muted-foreground">
                      "Преподаватели-практики научили всему, что нужно для работы."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
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