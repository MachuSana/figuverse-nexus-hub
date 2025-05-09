
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, Calendar } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [newComment, setNewComment] = useState('');
  const [displayedComments, setDisplayedComments] = useState(comments);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: `comment-${Date.now()}`,
      author: "Utilisateur",
      content: newComment,
      date: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    setDisplayedComments([newCommentObj, ...displayedComments]);
    setNewComment('');
  };

  const CommentCard = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => {
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [showReplies, setShowReplies] = useState(false);

    const handleSubmitReply = () => {
      if (!replyText.trim()) return;

      const newReply = {
        id: `reply-${Date.now()}`,
        author: "Utilisateur",
        content: replyText,
        date: new Date().toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
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
    };

    return (
      <div className={cn("border rounded-lg p-4 mb-4", isReply ? "ml-8" : "")}>
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold">{comment.author}</div>
          <div className="text-xs text-gray-500 flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {comment.date}
          </div>
        </div>
        
        <div className="text-gray-700 mb-3">{comment.content}</div>
        
        {!isReply && (
          <div className="flex items-center gap-4 mt-2">
            <Button variant="ghost" size="sm" onClick={() => setIsReplying(!isReplying)}>
              Répondre
            </Button>
            
            {comment.replies && comment.replies.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowReplies(!showReplies)}
              >
                {showReplies ? "Masquer les réponses" : `Voir les réponses (${comment.replies.length})`}
              </Button>
            )}
          </div>
        )}
        
        {isReplying && (
          <div className="mt-3">
            <Input
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
            <h3 className="text-xl font-semibold">Commentaires ({displayedComments.length})</h3>
          </div>
          
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? "Masquer" : "Afficher"}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <form onSubmit={handleSubmitComment} className="mb-6">
            <div className="space-y-2">
              <Label htmlFor="comment">Laisser un commentaire</Label>
              <div className="flex gap-2">
                <Input
                  id="comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Partagez vos impressions sur cet événement..."
                />
                <Button type="submit" disabled={!newComment.trim()}>
                  Publier
                </Button>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="link" size="sm" className="h-auto p-0 text-xs text-gray-500">
                    Règles de commentaires
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium">Règles de la communauté</h4>
                    <p className="text-xs text-gray-500">
                      Restez courtois et respectueux. Les commentaires offensants ou hors-sujet pourront être supprimés.
                      Ne partagez pas d'informations personnelles.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </form>
          
          <div className="space-y-4">
            {displayedComments.map(comment => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
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
