// DynamicForm.tsx — Główny komponent formularza
// Używa: shadcn/ui (Card, Button, Progress, Textarea, Radio, Checkbox)

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface Question {
  id: string;
  question: string;
  type: 'textarea' | 'radio' | 'checkbox';
  required: boolean;
  placeholder?: string;
  options?: string[];
  showIf?: {
    question: string;
    answer: string | string[];
  };
  next?: {
    if: string[];
    then: string;
  };
}

interface Questionnaire {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  recommendations: {
    if: { question: string; answer?: string | string[]; contains?: string[] };
    then: string;
  }[];
}

export function DynamicForm({ questionnaire }: { questionnaire: Questionnaire }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Sprawdź, czy pytanie powinno być wyświetlone
  const shouldShowQuestion = (question: Question) => {
    if (!question.showIf) return true;
    const { question: depQuestion, answer } = question.showIf;
    return answers[depQuestion] === answer || 
           (Array.isArray(answer) && answer.includes(answers[depQuestion]));
  };

  // Znajdź następne pytanie (logika warunkowa)
  const getNextQuestion = () => {
    const current = questionnaire.questions[currentQuestion];
    if (current.next) {
      const conditionMet = current.next.if.some((q) => answers[q] !== undefined);
      if (conditionMet) {
        return questionnaire.questions.findIndex((q) => q.id === current.next?.then);
      }
    }
    return currentQuestion + 1;
  };

  // Zapisz odpowiedź
  const handleAnswerChange = (value: any) => {
    setAnswers({
      ...answers,
      [questionnaire.questions[currentQuestion].id]: value
    });
  };

  // Przejdź do następnego pytania
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextQuestion = getNextQuestion();
    if (nextQuestion < questionnaire.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowRecommendations(true);
    }
  };

  // Generuj rekomendacje
  const getRecommendations = () => {
    return questionnaire.recommendations
      .filter((rec) => {
        const answer = answers[rec.if.question];
        if (rec.if.answer) {
          return answer === rec.if.answer;
        }
        if (rec.if.contains && Array.isArray(answer)) {
          return rec.if.contains.every((item) => answer.includes(item));
        }
        return false;
      })
      .map((rec) => rec.then);
  };

  // Renderuj input na podstawie typu pytania
  const renderInput = () => {
    const question = questionnaire.questions[currentQuestion];
    if (!shouldShowQuestion(question)) return null;

    switch (question.type) {
      case 'textarea':
        return (
          <Textarea
            placeholder={question.placeholder}
            value={answers[question.id] || ''}
            onChange={(e) => handleAnswerChange(e.target.value)}
            className="bg-[#1a1a26] text-[#e8e8ed] border-[#2a2a3a]"
          />
        );
      case 'radio':
        return (
          <RadioGroup
            value={answers[question.id]}
            onValueChange={handleAnswerChange}
            className="space-y-2"
          >
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} className="border-[#e8e8ed]" />
                <Label htmlFor={option} className="text-[#e8e8ed]">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'checkbox':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => {
              const checked = answers[question.id]?.includes(option) || false;
              return (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={checked}
                    onCheckedChange={(checked) => {
                      const currentAnswers = answers[question.id] || [];
                      handleAnswerChange(
                        checked
                          ? [...currentAnswers, option]
                          : currentAnswers.filter((item: string) => item !== option)
                      );
                    }}
                    className="border-[#e8e8ed]"
                  />
                  <Label htmlFor={option} className="text-[#e8e8ed]">{option}</Label>
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  };

  if (showRecommendations) {
    return (
      <Card className="max-w-2xl mx-auto bg-[#0a0a0f] text-[#e8e8ed] border-[#2a2a3a]">
        <CardHeader>
          <CardTitle>Podsumowanie</CardTitle>
          <CardDescription className="text-[#8b8b9e]">
            Oto rekomendacje na podstawie Twoich odpowiedzi:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {getRecommendations().map((rec, index) => (
            <div key={index} className="p-4 bg-[#12121a] rounded-lg">
              <p>{rec}</p>
            </div>
          ))}
          <Button
            onClick={() => setShowRecommendations(false)}
            className="bg-[#e94560] hover:bg-[#ff5e78]"
          >
            Wróć do pytań
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto bg-[#0a0a0f] text-[#e8e8ed] border-[#2a2a3a]">
      <CardHeader>
        <CardTitle>{questionnaire.title}</CardTitle>
        <CardDescription className="text-[#8b8b9e]">
          {questionnaire.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Progress
          value={((currentQuestion + 1) / questionnaire.questions.length) * 100}
          className="mb-6"
        />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-[#e8e8ed]">
              {questionnaire.questions[currentQuestion].question}
            </h3>
            {questionnaire.questions[currentQuestion].required && (
              <span className="text-[#e94560] ml-1">*</span>
            )}
          </div>
          {renderInput()}
          <div className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              className="border-[#2a2a3a] text-[#e8e8ed] hover:bg-[#1a1a26]"
            >
              Wstecz
            </Button>
            <Button
              type="submit"
              className="bg-[#e94560] hover:bg-[#ff5e78]"
            >
              {currentQuestion === questionnaire.questions.length - 1 ? 'Zakończ' : 'Dalej'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}