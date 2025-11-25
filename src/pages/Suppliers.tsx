import { Globe, Award, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Suppliers = () => {
  const { t, language } = useLanguage();

  const regions = [
    {
      name: language === 'ar' ? 'أوروبا' : 'Europe',
      countries: language === 'ar' 
        ? ['ألمانيا', 'إيطاليا', 'فرنسا', 'السويد']
        : ['Germany', 'Italy', 'France', 'Sweden'],
      icon: Globe,
    },
    {
      name: language === 'ar' ? 'آسيا' : 'Asia',
      countries: language === 'ar'
        ? ['الصين', 'اليابان', 'كوريا الجنوبية', 'الهند']
        : ['China', 'Japan', 'South Korea', 'India'],
      icon: TrendingUp,
    },
    {
      name: language === 'ar' ? 'أمريكا الشمالية' : 'North America',
      countries: language === 'ar'
        ? ['الولايات المتحدة', 'كندا', 'المكسيك']
        : ['United States', 'Canada', 'Mexico'],
      icon: Award,
    },
    {
      name: language === 'ar' ? 'الشرق الأوسط' : 'Middle East',
      countries: language === 'ar'
        ? ['تركيا', 'الإمارات', 'السعودية']
        : ['Turkey', 'UAE', 'Saudi Arabia'],
      icon: Users,
    },
  ];

  const brands = [
    'Caterpillar', 'Volvo', 'Mercedes-Benz', 'MAN',
    'Scania', 'DAF', 'Iveco', 'Renault Trucks',
    'Hino', 'Mitsubishi Fuso', 'Isuzu', 'UD Trucks',
    'Komatsu', 'Hitachi', 'Liebherr', 'JCB',
  ];

  const features = [
    {
      title: language === 'ar' ? 'شراكات قوية' : 'Strong Partnerships',
      description: language === 'ar'
        ? 'علاقات طويلة الأمد مع أفضل المصانع والموردين العالميين'
        : 'Long-term relationships with top global factories and suppliers',
    },
    {
      title: language === 'ar' ? 'تنوع المنتجات' : 'Product Diversity',
      description: language === 'ar'
        ? 'مجموعة واسعة من المنتجات لجميع أنواع المعدات الثقيلة'
        : 'Wide range of products for all types of heavy equipment',
    },
    {
      title: language === 'ar' ? 'أسعار تنافسية' : 'Competitive Prices',
      description: language === 'ar'
        ? 'أفضل الأسعار بفضل علاقاتنا المباشرة مع المصانع'
        : 'Best prices thanks to our direct relationships with factories',
    },
    {
      title: language === 'ar' ? 'جودة مضمونة' : 'Guaranteed Quality',
      description: language === 'ar'
        ? 'جميع منتجاتنا أصلية ومعتمدة من الشركات المصنعة'
        : 'All our products are original and certified by manufacturers',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero section-padding bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {t('suppliers.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            {t('suppliers.subtitle')}
          </p>
        </div>
      </section>

      {/* Regions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in-up border-2 hover:border-accent transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <region.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{region.name}</h3>
                  <ul className="space-y-2">
                    {region.countries.map((country, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {country}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'لماذا موردونا الأفضل' : 'Why Our Suppliers Are The Best'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="animate-fade-in-up border-2 hover:border-accent transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'العلامات التجارية التي نعمل معها' : 'Brands We Work With'}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className="hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-sm font-medium text-muted-foreground">
                    {brand}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: language === 'ar' ? 'شريك عالمي' : 'Global Partners' },
              { value: '20+', label: language === 'ar' ? 'دولة' : 'Countries' },
              { value: '100+', label: language === 'ar' ? 'علامة تجارية' : 'Brands' },
              { value: '15+', label: language === 'ar' ? 'سنة خبرة' : 'Years Experience' },
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

export default Suppliers;
