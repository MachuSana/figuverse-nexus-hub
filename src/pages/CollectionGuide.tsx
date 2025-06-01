
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Box, Scale, Wrench, Info, Sparkles, Shield, Eye, Droplets, BookOpen, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CollectionGuide: React.FC = () => {
  const { t } = useLanguage();

  const figurineTypes = [
    {
      title: t("scale_figures_title"),
      description: t("scale_figures_desc"),
      icon: Star,
      color: "bg-purple-100 text-purple-600",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&h=200"
    },
    {
      title: t("prize_figures_title"),
      description: t("prize_figures_desc"),
      icon: Box,
      color: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&h=200"
    },
    {
      title: t("nendoroid_title"),
      description: t("nendoroid_desc"),
      icon: Sparkles,
      color: "bg-pink-100 text-pink-600",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=300&h=200"
    },
    {
      title: t("figma_title"),
      description: t("figma_desc"),
      icon: Wrench,
      color: "bg-green-100 text-green-600",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=300&h=200"
    }
  ];

  const materials = [
    {
      title: t("pvc_title"),
      description: t("pvc_desc"),
      icon: Shield,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: t("resin_title"),
      description: t("resin_desc"),
      icon: Star,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: t("abs_title"),
      description: t("abs_desc"),
      icon: Box,
      color: "bg-gray-50 border-gray-200"
    }
  ];

  const scales = [
    { scale: t("scale_1_4_title"), description: t("scale_1_4_desc") },
    { scale: t("scale_1_6_title"), description: t("scale_1_6_desc") },
    { scale: t("scale_1_7_title"), description: t("scale_1_7_desc") },
    { scale: t("scale_1_8_title"), description: t("scale_1_8_desc") }
  ];

  const careTips = [
    {
      title: t("dusting_title"),
      tip: t("dusting_tip"),
      icon: Sparkles,
      color: "text-yellow-600"
    },
    {
      title: t("storage_title"),
      tip: t("storage_tip"),
      icon: Box,
      color: "text-blue-600"
    },
    {
      title: t("display_title"),
      tip: t("display_tip"),
      icon: Eye,
      color: "text-green-600"
    },
    {
      title: t("cleaning_title"),
      tip: t("cleaning_tip"),
      icon: Droplets,
      color: "text-cyan-600"
    }
  ];

  const glossaryTerms = [
    { term: t("garage_kit_term"), definition: t("garage_kit_def") },
    { term: t("prepainted_term"), definition: t("prepainted_def") },
    { term: t("exclusive_term"), definition: t("exclusive_def") },
    { term: t("cast_off_term"), definition: t("cast_off_def") },
    { term: t("bootleg_term"), definition: t("bootleg_def") },
    { term: t("grail_term"), definition: t("grail_def") }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-figuverse-red transition-colors">
            {t("home")}
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{t("collection_guide")}</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-figuverse-red rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("collection_guide")}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {t("guide_subtitle")}
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t("guide_intro")}
          </p>
        </div>

        {/* Types de figurines */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Box className="h-8 w-8 text-figuverse-red mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">{t("figurine_types_title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {figurineTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`p-2 rounded-lg ${type.color}`}>
                      <type.icon className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Matériaux */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Wrench className="h-8 w-8 text-figuverse-red mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">{t("materials_title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className={`border-2 ${material.color}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <material.icon className="h-6 w-6 text-figuverse-red" />
                    <CardTitle className="text-xl">{material.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{material.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Échelles */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Scale className="h-8 w-8 text-figuverse-red mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">{t("scales_title")}</h2>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="space-y-4">
              {scales.map((scale, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-figuverse-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{scale.scale}</h3>
                    <p className="text-gray-700">{scale.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conseils d'entretien */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Sparkles className="h-8 w-8 text-figuverse-red mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">{t("care_title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careTips.map((tip, index) => (
              <Card key={index} className="border-l-4 border-l-figuverse-red">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <tip.icon className={`h-6 w-6 ${tip.color}`} />
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Lexique */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Info className="h-8 w-8 text-figuverse-red mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">{t("glossary_title")}</h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {glossaryTerms.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <dt className="text-lg font-semibold text-figuverse-red mb-2">
                      {item.term}
                    </dt>
                    <dd className="text-gray-700">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to action */}
        <div className="text-center bg-white rounded-lg shadow-sm border p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à commencer votre collection ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explorez notre catalogue de figurines et trouvez vos premières pièces de collection.
          </p>
          <Link 
            to="/figurines"
            className="inline-flex items-center space-x-2 bg-figuverse-red text-white px-6 py-3 rounded-lg hover:bg-figuverse-red-dark transition-colors"
          >
            <Box className="h-5 w-5" />
            <span>Voir les figurines</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionGuide;
