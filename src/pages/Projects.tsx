import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'ar' ? 'مشروع النقل الوطني' : 'National Transport Project',
      client: language === 'ar' ? 'شركة النقل الوطني' : 'National Transport Company',
      location: language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt',
      date: '2024',
      description: language === 'ar'
        ? 'توريد قطع غيار كاملة لأسطول من 50 شاحنة نقل ثقيل'
        : 'Complete spare parts supply for a fleet of 50 heavy transport trucks',
      status: language === 'ar' ? 'مكتمل' : 'Completed',
      category: language === 'ar' ? 'نقل ثقيل' : 'Heavy Transport',
    },
    {
      title: language === 'ar' ? 'مشروع البناء السريع' : 'Rapid Construction Project',
      client: language === 'ar' ? 'شركة التشييد المتقدمة' : 'Advanced Construction Co.',
      location: language === 'ar' ? 'الإسكندرية، مصر' : 'Alexandria, Egypt',
      date: '2024',
      description: language === 'ar'
        ? 'توريد قطع غيار لمعدات البناء والحفر الثقيلة'
        : 'Spare parts supply for heavy construction and excavation equipment',
      status: language === 'ar' ? 'قيد التنفيذ' : 'In Progress',
      category: language === 'ar' ? 'معدات بناء' : 'Construction Equipment',
    },
    {
      title: language === 'ar' ? 'مشروع التعدين الكبير' : 'Large Mining Project',
      client: language === 'ar' ? 'شركة المناجم المصرية' : 'Egyptian Mining Company',
      location: language === 'ar' ? 'أسوان، مصر' : 'Aswan, Egypt',
      date: '2023',
      description: language === 'ar'
        ? 'توريد وصيانة قطع غيار معدات التعدين الثقيلة'
        : 'Supply and maintenance of heavy mining equipment spare parts',
      status: language === 'ar' ? 'مكتمل' : 'Completed',
      category: language === 'ar' ? 'معدات تعدين' : 'Mining Equipment',
    },
    {
      title: language === 'ar' ? 'مشروع الموانئ' : 'Ports Project',
      client: language === 'ar' ? 'هيئة الموانئ' : 'Ports Authority',
      location: language === 'ar' ? 'بورسعيد، مصر' : 'Port Said, Egypt',
      date: '2023',
      description: language === 'ar'
        ? 'توريد قطع غيار لرافعات الحاويات ومعدات الموانئ'
        : 'Spare parts supply for container cranes and port equipment',
      status: language === 'ar' ? 'مكتمل' : 'Completed',
      category: language === 'ar' ? 'معدات موانئ' : 'Port Equipment',
    },
    {
      title: language === 'ar' ? 'مشروع الطرق السريعة' : 'Highway Project',
      client: language === 'ar' ? 'وزارة النقل' : 'Ministry of Transport',
      location: language === 'ar' ? 'مصر' : 'Egypt',
      date: '2024',
      description: language === 'ar'
        ? 'توريد قطع غيار لمعدات رصف وصيانة الطرق'
        : 'Spare parts supply for road paving and maintenance equipment',
      status: language === 'ar' ? 'قيد التنفيذ' : 'In Progress',
      category: language === 'ar' ? 'معدات طرق' : 'Road Equipment',
    },
    {
      title: language === 'ar' ? 'مشروع الزراعة الحديثة' : 'Modern Agriculture Project',
      client: language === 'ar' ? 'شركة الزراعة المتطورة' : 'Advanced Agriculture Co.',
      location: language === 'ar' ? 'الفيوم، مصر' : 'Fayoum, Egypt',
      date: '2023',
      description: language === 'ar'
        ? 'توريد قطع غيار للجرارات والمعدات الزراعية الثقيلة'
        : 'Spare parts supply for tractors and heavy agricultural equipment',
      status: language === 'ar' ? 'مكتمل' : 'Completed',
      category: language === 'ar' ? 'معدات زراعية' : 'Agricultural Equipment',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero section-padding bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {t('projects.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-in-up border-2 hover:border-accent transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={project.status === (language === 'ar' ? 'مكتمل' : 'Completed') ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: language === 'ar' ? 'مشروع مكتمل' : 'Completed Projects' },
              { value: '50+', label: language === 'ar' ? 'عميل' : 'Clients' },
              { value: '15+', label: language === 'ar' ? 'دولة' : 'Countries' },
              { value: '98%', label: language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction' },
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

export default Projects;
