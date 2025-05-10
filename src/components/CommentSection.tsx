
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Calendar, Flag, Star, Sort, Shield, ThumbsUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  rating?: number;
  likes?: number;
  replies?: Comment[];
  reported?: boolean;
}

interface CommentSectionProps {
  comments: Comment[];
  contextType?: 'figurine' | 'license';
  contextName?: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ 
  comments: initialComments, 
  contextType = 'figurine',
  contextName = 'cet élément'
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [displayedComments, setDisplayedComments] = useState(initialComments);
  const [sortOrder, setSortOrder] = useState<'recent' | 'popular'>('recent');
  const { toast } = useToast();

  const sortComments = (comments: Comment[], order: 'recent' | 'popular') => {
    if (order === 'recent') {
      return [...comments].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else {
      return [...comments].sort((a, b) => 
        (b.likes || 0) - (a.likes || 0)
      );
    }
  };

  const handleSortChange = (value: 'recent' | 'popular') => {
    setSortOrder(value);
    setDisplayedComments(sortComments(displayedComments, value));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: `comment-${Date.now()}`,
      author: "Utilisateur",
      content: newComment,
      rating: rating,
      likes: 0,
      date: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    setDisplayedComments(sortComments([newCommentObj, ...displayedComments], sortOrder));
    setNewComment('');
    setRating(5);
    
    toast({
      title: "Commentaire publié",
      description: "Votre avis a été ajouté avec succès.",
    });
  };

  const handleReportComment = (commentId: string) => {
    const updatedComments = displayedComments.map(comment => 
      comment.id === commentId ? { ...comment, reported: true } : comment
    );
    
    setDisplayedComments(updatedComments);
    toast({
      title: "Commentaire signalé",
      description: "Merci pour votre signalement. Notre équipe va l'examiner.",
    });
  };

  const handleLikeComment = (commentId: string) => {
    const updatedComments = displayedComments.map(comment => 
      comment.id === commentId ? { ...comment, likes: (comment.likes || 0) + 1 } : comment
    );
    
    setDisplayedComments(updatedComments);
  };

  const RatingInput = () => (
    <div className="flex items-center space-x-1 mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          className="p-1 focus:outline-none"
        >
          <Star
            className={`h-6 w-6 ${
              star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
            }`}
          />
        </button>
      ))}
      <span className="ml-2 text-sm text-gray-500">
        ({rating}/5)
      </span>
    </div>
  );

  const StarRating = ({ rating }: { rating?: number }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= (rating || 0) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  const CommentCard = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [showReplies, setShowReplies] = useState(false);

    const handleSubmitReply = () => {
      if (!replyText.trim()) return;

      const newReply: Comment = {
        id: `reply-${Date.now()}`,
        author: "Utilisateur",
        content: replyText,
        date: new Date().toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        likes: 0
      };

      // Clone and update the comments with the new reply
      const updatedComments = [...displayedComments];
      const commentIndex = updatedComments.findIndex(c => c.id === comment.id);
      
      if (commentIndex !== -1) {
        if (!updatedComments[commentIndex].replies) {
          updatedComments[commentIndex].replies = [];
        }
        updatedComments[commentIndex].replies!.push(newReply);
        setDisplayedComments(updatedComments);
      }
      
      setReplyText('');
      setIsReplying(false);
      setShowReplies(true);
      
      toast({
        title: "Réponse publiée",
        description: "Votre réponse a été ajoutée avec succès.",
      });
    };

    const getInitials = (name: string) => {
      return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
    };

    return (
      <div className={cn("border rounded-lg p-4 mb-4", isReply ? "ml-8" : "")}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.author}`} alt={comment.author} />
              <AvatarFallback>{getInitials(comment.author)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{comment.author}</div>
              <div className="text-xs text-gray-500 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {comment.date}
              </div>
            </div>
          </div>
          
          {!isReply && comment.rating && (
            <StarRating rating={comment.rating} />
          )}
        </div>
        
        <div className="text-gray-700 mb-3 mt-2">{comment.content}</div>
        
        <div className="flex items-center gap-4 mt-2 text-sm">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => handleLikeComment(comment.id)}
            className="h-8 px-2 text-gray-600 hover:text-figuverse-red"
          >
            <ThumbsUp className="h-4 w-4 mr-1.5" />
            {comment.likes || 0}
          </Button>
          
          {!isReply && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsReplying(!isReplying)}
              className="h-8 px-2 text-gray-600 hover:text-figuverse-red"
            >
              Répondre
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => handleReportComment(comment.id)}
            className={cn(
              "h-8 px-2", 
              comment.reported 
                ? "text-amber-500" 
                : "text-gray-600 hover:text-amber-500"
            )}
            disabled={comment.reported}
          >
            <Flag className={cn("h-4 w-4 mr-1.5", comment.reported && "fill-amber-500")} />
            {comment.reported ? "Signalé" : "Signaler"}
          </Button>
          
          {!isReply && comment.replies && comment.replies.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setShowReplies(!showReplies)}
              className="h-8 px-2 text-gray-600 hover:text-figuverse-red ml-auto"
            >
              {showReplies ? "Masquer les réponses" : `Voir les réponses (${comment.replies.length})`}
            </Button>
          )}
        </div>
        
        {isReplying && (
          <div className="mt-3">
            <Textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Écrire une réponse..."
              className="mb-2"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={() => setIsReplying(false)}>
                Annuler
              </Button>
              <Button size="sm" onClick={handleSubmitReply}>
                Répondre
              </Button>
            </div>
          </div>
        )}
        
        {showReplies && comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-4">
            {comment.replies.map(reply => (
              <CommentCard key={reply.id} comment={reply} isReply={true} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-figuverse-red" />
            <h3 className="text-xl font-semibold">Avis ({displayedComments.length})</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <Select
              value={sortOrder}
              onValueChange={(value) => handleSortChange(value as 'recent' | 'popular')}
            >
              <SelectTrigger className="w-[180px] h-9 text-sm border-gray-200">
                <Sort className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récents</SelectItem>
                <SelectItem value="popular">Plus populaires</SelectItem>
              </SelectContent>
            </Select>
            
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {isOpen ? "Masquer" : "Afficher"}
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
        
        <CollapsibleContent>
          <form onSubmit={handleSubmitComment} className="mb-6 bg-figuverse-gray-100 p-4 rounded-lg">
            <div className="space-y-3">
              <div>
                <Label htmlFor="comment">Votre avis sur {contextName}</Label>
                <RatingInput />
              </div>
              
              <div>
                <Textarea
                  id="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder={`Partagez votre opinion sur ${contextType === 'figurine' ? 'cette figurine' : 'cette licence'}...`}
                  className="resize-none bg-white"
                  rows={4}
                />
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs text-gray-500 flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      Règles de commentaires
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Règles de la communauté</h4>
                      <p className="text-xs text-gray-500">
                        Restez courtois et respectueux. Les commentaires offensants ou hors-sujet pourront être supprimés.
                        Ne partagez pas d'informations personnelles. Les avis frauduleux ou trompeurs seront retirés.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
                
                <Button type="submit" disabled={!newComment.trim()}>
                  Publier
                </Button>
              </div>
            </div>
          </form>
          
          <div className="space-y-4">
            {displayedComments.length > 0 ? (
              displayedComments.map(comment => (
                <CommentCard key={comment.id} comment={comment} />
              ))
            ) : (
              <div className="text-center py-10 text-gray-500">
                <MessageCircle className="h-10 w-10 mx-auto mb-2 opacity-30" />
                <p>Soyez le premier à donner votre avis sur {contextName} !</p>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Utilitaire pour les classes conditionnelles
const cn = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ');
};

export default CommentSection;
