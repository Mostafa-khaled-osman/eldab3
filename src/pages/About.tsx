import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import warehouseImage from '@/assets/Temac.svg';

const About = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: language === 'ar' ? 'الجودة أولاً' : 'Quality First',
      description: language === 'ar' 
        ? 'نلتزم بتقديم منتجات عالية الجودة تلبي المعايير الدولية'
        : 'We commit to providing high-quality products that meet international standards',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'رضا العملاء' : 'Customer Satisfaction',
      description: language === 'ar'
        ? 'نضع احتياجات عملائنا في المقام الأول ونسعى لتجاوز توقعاتهم'
        : 'We put our customers\' needs first and strive to exceed their expectations',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'الخبرة والاحترافية' : 'Expertise & Professionalism',
      description: language === 'ar'
        ? 'فريق عمل متخصص بخبرة واسعة في مجال قطع غيار النقل الثقيل'
        : 'Specialized team with extensive experience in heavy transport spare parts',
    },
  ];

  const features = [
    language === 'ar' ? 'شبكة واسعة من الموردين العالميين' : 'Wide network of global suppliers',
    language === 'ar' ? 'أسعار تنافسية مع ضمان الجودة' : 'Competitive prices with quality assurance',
    language === 'ar' ? 'خدمة عملاء متميزة على مدار الساعة' : '24/7 excellent customer service',
    language === 'ar' ? 'توصيل سريع وآمن' : 'Fast and secure delivery',
    language === 'ar' ? 'فحص دقيق لجميع المنتجات' : 'Thorough inspection of all products',
    language === 'ar' ? 'استشارات فنية متخصصة' : 'Specialized technical consulting',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero section-padding bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {t('about.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">
                {language === 'ar' ? 'من نحن' : 'Who We Are'}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src={warehouseImage}
                alt="Warehouse"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'القيم التي تحدد طريقة عملنا وتعاملنا مع عملائنا'
                : 'Values that define how we work and deal with our customers'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in-up border-2 hover:border-accent transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: t('about.experience') },
              { value: '50+', label: t('about.partners') },
              { value: '5000+', label: t('about.products') },
              { value: '1000+', label: t('about.clients') },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
