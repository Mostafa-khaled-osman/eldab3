import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'ar' ? 'تم الإرسال بنجاح' : 'Successfully Sent',
      description: language === 'ar' 
        ? 'شكراً لتواصلك معنا. سنرد عليك في أقرب وقت.'
        : 'Thank you for contacting us. We will reply as soon as possible.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+20 123 456 7890',
      link: 'tel:+201234567890',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@aldabaa.com',
      link: 'mailto:info@aldabaa.com',
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero section-padding bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            {t('contact.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up opacity-90" style={{ animationDelay: '0.2s' }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="border-2">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact.name')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact.email')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t('contact.phone')}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('contact.message')}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-glow"
                      size="lg"
                    >
                      {t('contact.send')}
                      <Send className="mr-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('contact.info')}</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-2 hover:border-accent transition-all hover-lift">
                      <CardContent className="p-6">
                        <a href={info.link} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 text-xl">{t('contact.hours')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('contact.hours.value')}
                  </p>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-2 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-muted-foreground" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
