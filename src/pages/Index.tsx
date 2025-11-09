import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'TrendingUp',
    title: 'Digital-продвижение',
    description: 'Комплексное продвижение в digital-среде: SEO, контекстная реклама, таргетированная реклама в социальных сетях'
  },
  {
    icon: 'Palette',
    title: 'Создание дизайна',
    description: 'Разработка уникального фирменного стиля, логотипов, брендбуков и визуальных концепций'
  },
  {
    icon: 'Code',
    title: 'Разработка сайтов',
    description: 'Создание современных сайтов и веб-приложений: лендинги, корпоративные сайты, интернет-магазины'
  },
  {
    icon: 'Database',
    title: 'Внедрение CRM и телефонии',
    description: 'Настройка систем управления клиентами и интеграция с IP-телефонией для эффективных продаж'
  },
  {
    icon: 'Megaphone',
    title: 'PR-стратегии',
    description: 'Разработка и реализация комплексных PR-стратегий для укрепления репутации бренда'
  },
  {
    icon: 'Target',
    title: 'Стратегическое планирование',
    description: 'Написание и реализация маркетинговых стратегий полного цикла для роста бизнеса'
  }
];

const portfolio = [
  {
    title: 'Интернет-магазин электроники',
    category: 'E-commerce + Digital',
    result: '+320% продаж за 6 месяцев',
    metrics: ['Разработка сайта', 'SEO-продвижение', 'Контекстная реклама'],
    image: 'https://cdn.poehali.dev/projects/c111fe6b-cb46-46ce-8c2a-ba11a0f56b2a/files/cc6aca58-5417-441f-84e2-6c7ef43ec9c8.jpg'
  },
  {
    title: 'Сеть фитнес-клубов',
    category: 'Брендинг + CRM',
    result: '+180% лидов, -40% стоимость лида',
    metrics: ['Фирменный стиль', 'Внедрение CRM', 'PR-кампания'],
    image: 'https://cdn.poehali.dev/projects/c111fe6b-cb46-46ce-8c2a-ba11a0f56b2a/files/f7ec1c3d-5ef7-46fc-a7c7-73499e34ca7c.jpg'
  },
  {
    title: 'B2B IT-компания',
    category: 'Full-cycle маркетинг',
    result: '+250% выручка за год',
    metrics: ['Стратегия', 'Корп. сайт', 'Digital-каналы'],
    image: 'https://cdn.poehali.dev/projects/c111fe6b-cb46-46ce-8c2a-ba11a0f56b2a/files/13620ac4-e63c-4e73-b42f-8a23c8c4c936.jpg'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              MarketPro
            </h1>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Полный цикл рекламы для вашего бизнеса
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Создаём комплексные маркетинговые решения: от стратегии до увеличения прибыли
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contacts')}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                Заказать консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-lg px-8 py-6"
              >
                Смотреть кейсы
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                  350%
                </div>
                <div className="text-muted-foreground">Средний рост продаж</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
                  5 лет
                </div>
                <div className="text-muted-foreground">На рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к развитию вашего бизнеса на всех этапах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши кейсы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/60 to-accent/60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary mb-4">
                    {project.result}
                  </div>
                  <div className="space-y-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите бесплатную консультацию
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input 
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      required
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 border-2"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">info@marketpro.ru</div>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div className="font-medium">Телефон</div>
                  <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div className="font-medium">Адрес</div>
                  <div className="text-sm text-muted-foreground">Москва, ул. Примерная, 1</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                MarketPro
              </h3>
              <p className="text-background/70">
                Маркетинговое агенство полного цикла
              </p>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Icon name="Linkedin" size={20} />
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-background/10 text-center text-background/70 text-sm">
            © 2024 MarketPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}