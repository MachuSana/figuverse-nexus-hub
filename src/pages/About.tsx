
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Heart, Users, Award, Globe, Star, TrendingUp, MessageSquare, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t("team_founder_name"),
      role: t("team_founder_role"),
      bio: t("team_founder_bio"),
      icon: Crown,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: t("team_manager_name"),
      role: t("team_manager_role"),
      bio: t("team_manager_bio"),
      icon: Users,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: t("team_reviewer_name"),
      role: t("team_reviewer_role"),
      bio: t("team_reviewer_bio"),
      icon: Star,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      title: t("value_passion_title"),
      description: t("value_passion_text"),
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: t("value_community_title"),
      description: t("value_community_text"),
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: t("value_quality_title"),
      description: t("value_quality_text"),
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: t("value_accessibility_title"),
      description: t("value_accessibility_text"),
      icon: Globe,
      color: "text-green-500"
    }
  ];

  const keyNumbers = [
    {
      number: "25,000+",
      label: t("users_count"),
      icon: Users,
      color: "bg-blue-500"
    },
    {
      number: "12,500+",
      label: t("figurines_count"),
      icon: Star,
      color: "bg-figuverse-red"
    },
    {
      number: "850+",
      label: t("reviews_count"),
      icon: MessageSquare,
      color: "bg-green-500"
    },
    {
      number: "45+",
      label: t("partners_count"),
      icon: TrendingUp,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow">
        {/* Navigation retour */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" className="pl-0 flex items-center mb-6" aria-label={t("back_home")}>
              <ChevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>{t("back_home")}</span>
            </Button>
          </Link>
        </div>

        {/* Bannière héro */}
        <section className="relative bg-gradient-to-r from-figuverse-red to-figuverse-red-dark text-white py-20">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=600&fit=crop')"
            }}
          />
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("about_page_title")}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t("about_page_subtitle")}
            </p>
          </div>
        </section>

        {/* Notre Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-figuverse-gray-700">
                {t("our_mission_title")}
              </h2>
              <p className="text-lg leading-relaxed text-figuverse-gray-600 mb-8">
                {t("our_mission_text")}
              </p>
            </div>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-16 bg-figuverse-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-figuverse-gray-700">
                {t("our_story_title")}
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-lg leading-relaxed text-figuverse-gray-600">
                  {t("our_story_text")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-figuverse-gray-700">
              {t("our_team_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="relative mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-figuverse-red rounded-full p-2">
                        <member.icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-figuverse-gray-700">
                      {member.name}
                    </CardTitle>
                    <p className="text-figuverse-red font-medium">
                      {member.role}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-figuverse-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="py-16 bg-figuverse-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-figuverse-gray-700">
              {t("our_values_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <CardTitle className="text-xl text-figuverse-gray-700">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-figuverse-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Chiffres Clés */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-figuverse-gray-700">
              {t("key_numbers_title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {keyNumbers.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-figuverse-gray-700 mb-2">
                      {stat.number}
                    </div>
                    <p className="text-figuverse-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-figuverse-red to-figuverse-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Rejoignez la communauté FiguVerse !
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez les dernières nouveautés, partagez vos coups de cœur et connectez-vous avec d'autres passionnés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/newsletter">
                <Button size="lg" variant="secondary" className="bg-white text-figuverse-red hover:bg-figuverse-gray-100">
                  S'abonner à la newsletter
                </Button>
              </Link>
              <Link to="/figurines">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-figuverse-red">
                  Découvrir les figurines
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
