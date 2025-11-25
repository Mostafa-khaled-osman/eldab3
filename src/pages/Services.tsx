import { Package, Truck, Shield, Headphones, Wrench, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Package,
      title: t('services.import.title'),
      description: t('services.import.desc'),
      features: language === 'ar' 
        ? ['استيراد مباشر من المصانع', 'أسعار تنافسية', 'شحن دولي موثوق']
        : ['Direct import from factories', 'Competitive prices', 'Reliable international shipping'],
    },
    {
      icon: Truck,
      title: t('services.supply.title'),
      description: t('services.supply.desc'),
      features: language === 'ar'
        ? ['توصيل سريع', 'تتبع الشحنات', 'تغليف احترافي']
        : ['Fast delivery', 'Shipment tracking', 'Professional packaging'],
    },
    {
      icon: Shield,
      title: t('services.quality.title'),
      description: t('services.quality.desc'),
      features: language === 'ar'
        ? ['فحص دقيق', 'ضمان الجودة', 'شهادات معتمدة']
        : ['Thorough inspection', 'Quality assurance', 'Certified standards'],
    },
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.desc'),
      features: language === 'ar'
        ? ['دعم فني 24/7', 'استشارات مجانية', 'متابعة مستمرة']
        : ['24/7 technical support', 'Free consultations', 'Continuous follow-up'],
    },
    {
      icon: Wrench,
      title: language === 'ar' ? 'صيانة وإصلاح' : 'Maintenance & Repair',
      description: language === 'ar'
        ? 'خدمات صيانة وإصلاح متخصصة للمعدات الثقيلة'
        : 'Specialized maintenance and repair services for heavy equipment',
      features: language === 'ar'
        ? ['فنيون متخصصون', 'قطع غيار أصلية', 'ضمان الخدمة']
        : ['Specialized technicians', 'Original spare parts', 'Service warranty'],
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'شبكة عالمية' : 'Global Network',
      description: language === 'ar'
        ? 'شبكة واسعة من الموردين والشركاء حول العالم'
        : 'Wide network of suppliers and partners worldwide',
      features: language === 'ar'
        ? ['شركاء عالميون', 'توريد من أي مكان', 'أسعار مميزة']
        : ['Global partners', 'Supply from anywhere', 'Special prices'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero section-padding bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {t('services.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in-up border-2 hover:border-accent transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <Card className="bg-gradient-to-r from-primary to-primary-glow text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'ar' ? 'هل تحتاج إلى خدماتنا؟' : 'Need Our Services?'}
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'تواصل معنا الآن للحصول على استشارة مجانية وعرض أسعار مخصص'
                  : 'Contact us now for a free consultation and custom quote'}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-colors"
              >
                {t('nav.contact')}
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
