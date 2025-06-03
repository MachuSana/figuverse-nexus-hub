import React from 'react';
import { Heart, Coffee, Gift, Users, MessageCircle, Share2, Lightbulb, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AdBanner from '@/components/AdBanner';

const Support: React.FC = () => {
  const { t } = useLanguage();

  const supportPlatforms = [
    {
      name: "Ko-fi",
      icon: Coffee,
      description: t("kofi_desc"),
      url: "https://ko-fi.com/figuverse",
      color: "bg-blue-500 hover:bg-blue-600",
      textColor: "text-blue-600"
    },
    {
      name: "Utip",
      icon: Heart,
      description: t("utip_desc"),
      url: "https://utip.io/figuverse",
      color: "bg-red-500 hover:bg-red-600",
      textColor: "text-red-600"
    },
    {
      name: "Patreon",
      icon: Gift,
      description: t("patreon_desc"),
      url: "https://patreon.com/figuverse",
      color: "bg-orange-500 hover:bg-orange-600",
      textColor: "text-orange-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: t("early_access"),
    },
    {
      icon: Star,
      title: t("exclusive_content"),
    },
    {
      icon: Users,
      title: t("discord_access"),
    },
    {
      icon: Heart,
      title: t("monthly_thanks"),
    }
  ];

  const otherWays = [
    {
      icon: Share2,
      title: t("share_content"),
    },
    {
      icon: MessageCircle,
      title: t("leave_comments"),
    },
    {
      icon: Lightbulb,
      title: t("suggest_content"),
    }
  ];

  // Publicités contextuelles pour la page de soutien
  const supportAds = [
    {
      title: "Ko-fi Gold - Soutenez vos créateurs préférés",
      description: "Plateforme de soutien simple et sécurisée pour les créateurs de contenu",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://ko-fi.com",
      sponsor: "Ko-fi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("support_page_title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("support_page_subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 border-0 shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("support_intro")}
            </p>
          </CardContent>
        </Card>

        {/* Why Support Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t("why_support_title")}
          </h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                {t("why_support_text")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Support Platforms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("support_platforms_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportPlatforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <Card key={platform.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 mx-auto">
                      <IconComponent className={`h-8 w-8 ${platform.textColor}`} />
                    </div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <CardDescription className="text-base">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <Button
                      asChild
                      className={`w-full ${platform.color} text-white`}
                    >
                      <a href={platform.url} target="_blank" rel="noopener noreferrer">
                        {t("support")} sur {platform.name}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Publicité contextuelle */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nos partenaires de soutien
          </h2>
          <div className="max-w-2xl mx-auto">
            {supportAds.map((ad, index) => (
              <AdBanner
                key={index}
                title={ad.title}
                description={ad.description}
                imageUrl={ad.imageUrl}
                linkUrl={ad.linkUrl}
                sponsor={ad.sponsor}
                size="medium"
              />
            ))}
          </div>
        </div>

        {/* Support Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("support_benefits_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-medium text-gray-800">{benefit.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Other Ways to Help */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("other_ways_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherWays.map((way, index) => {
              const IconComponent = way.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-gray-600" />
                    </div>
                    <p className="font-medium text-gray-800">{way.title}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Thank You Section */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("thank_you_title")}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
              {t("thank_you_text")}
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
