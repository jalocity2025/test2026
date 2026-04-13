const fullQuestionBank = [
    // √”∆·… «·’Ê«» Ê«·Œÿ√ (True/False)
    { "q": "”»» ŸÂÊ— «·Ê”«∆ÿ «·„ ⁄œœ… «· ÿÊ— «·ﬂ»Ì— ›Ì  ﬁ‰Ì«  «·Õ«”Ê» „‰ ÕÌÀ «·„⁄«·Ã… Ê«·”—⁄….", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "›Ì „—Õ·… «·ŸÂÊ— «·ÕﬂÊ„Ì Ì „ «·Õ’Ê· ⁄·Ï «·‰”Œ «·≈·ﬂ —Ê‰Ì… ·»⁄÷ «·‰„«–Ã «·ÕﬂÊ„Ì….", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "ÌﬁÊ„ «·Ãœ«— «·‰«—Ì »«·ﬂ‘› ⁄‰ «·„Œ«ÿ— «· Ì  Õœœ √”„«¡ «·„Ê«ﬁ⁄ «·„‘»ÊÂ… √Ê „‰⁄ «· Ê«’· „⁄ „Ê«ﬁ⁄ Ê—œ  »Â« „’ÿ·Õ«  €—«∆“Ì… √Ê ≈—Â«»Ì… √Ê ⁄‰’—Ì….", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "·« ÌÕ «Ã ≈⁄œ«œ «·Ê”«∆ÿ «·„ ⁄œœ… ≈·Ï √ÃÂ“… Ê„⁄œ«  „Œ ·›… · ‘€Ì·Â«.", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "›Ì »⁄÷ «·œÊ· ·«  ÊÃœ ﬁÌÊœ ﬁ«‰Ê‰Ì… ⁄·Ï ‰‘— Ê«” €·«· «·„Ê«œ «·≈»«ÕÌ… ≈·« ›Ì„« Ì ⁄·ﬁ »«” €·«· «·√ÿ›«·.", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "Ì” ÿÌ⁄ √Ì „ÊŸ› «·«ÿ·«⁄ ⁄·Ï »Ì«‰«  «·„ƒ””… »«·ﬂ«„· ÊÂ–« ·« Ì ⁄«—÷ „⁄  ÿ»Ìﬁ «·Õ„«Ì… «·√„‰Ì… ··»—„ÃÌ« .", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "·«»œ √‰  ﬂÊ‰ «·’Ê—… „Œ“‰… ÷„‰ „·›«  »—‰«„Ã POWERPOINT ·ﬂÌ Ì „ﬂ‰ „‰ ≈œ—«ÃÂ«.", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "œÊ— «·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì… ÂÊ ≈œ«—… «·»·«œ „‰ Œ·«· «·≈œ«—«  Ê«·Ê“«—«  «· «»⁄… ·Â«.", "options": ["’Õ", "Œÿ√"], "answer": 0 },

    // √”∆·… «·«Œ Ì«— „‰ „ ⁄œœ (Multiple Choice)
    { "q": " ’Ì» «·›Ì—Ê”«  „”«Õ«  «· Œ“Ì‰ »–«ﬂ—… «·Õ«”Ê» ·ﬂÌ:", "options": [" ”»» ›Ì ”—ﬁ… «·„⁄·Ê„« ", " ”»» ›Ì “Ì«œ… ÕÃ„ «·„·›« ", " ÷„‰ «” „—«— ÊÃÊœÂ« Ê‰‘«ÿÂ«", " „‰⁄ «·„” Œœ„ „‰ Õ–› «·„·›« "], "answer": 2 },
    { "q": "√Ì „„« Ì·Ì ·« Ì⁄ »— „‰ „ﬂÊ‰«  «·Ê”«∆ÿ «·„ ⁄œœ…ø", "options": ["«·‰’Ê’ «·„‰”ﬁ…", "«·—”Ê„ «·ŒÿÌ…", "«·’Ê— «·À«» …", "ÊÕœ«  «· Œ“Ì‰"], "answer": 3 },
    { "q": "Ìﬁ’œ »„’ÿ·Õ «·„·ﬂÌ… «·›ﬂ—Ì…:", "options": ["Õﬁ «·„ƒ””«  ›Ì »Ì⁄ «·»—„ÃÌ« ", "Õﬁ «·„ƒ·› ›Ì ⁄œ„ «” Œœ«„ ⁄„·Â œÊ‰ ≈–‰", "Õﬁ «·„Ê«ÿ‰ ›Ì «·Õ’Ê· ⁄·Ï «·„⁄·Ê„« ", "Õﬁ «·œÊ·… ›Ì  ‘›Ì— «·»Ì«‰« "], "answer": 1 },
    { "q": " ⁄ »— «·—”Ê„ «·„ Õ—ﬂ… Ê”Ì·… ›⁄«·… ›Ì «·Ê”«∆ÿ «·„ ⁄œœ… ·√‰Â«:", "options": [" “Ìœ „‰ ÕÃ„ «·„·›", " ”«⁄œ ›Ì  Ê÷ÌÕ «·„›«ÂÌ„ «·„⁄ﬁœ… Ê«·Õ—ﬂÌ…", " ” Œœ„ √·Ê«‰« “«ÂÌ… ›ﬁÿ", " €‰Ì ⁄‰ «” Œœ«„ «·‰’Ê’"], "answer": 1 },
    { "q": "„‰ √Â„ Ê”«∆· Õ„«Ì… «·»Ì«‰«  «·„—”·… ⁄»— «·‘»ﬂ«  „‰ ﬁ—«’‰… «·„⁄·Ê„«  ·√‰:", "options": ["«·„Œ —ﬁ ÌÃÂ· ÿ—Ìﬁ… «· ‘›Ì—", "·« Ì„ﬂ‰ «” €·«· «·»Ì«‰«  »√Ì ‘ﬂ·", "«·»Ì«‰«  €Ì— „›ÂÊ„… ··„Œ —ﬁ", "Ã„Ì⁄ «·≈Ã«»«  «·”«»ﬁ… ’ÕÌÕ…"], "answer": 3 },
    { "q": "  „Ì“ „—Õ·… «·‰‘— »“Ì«œ… ⁄œœ «·„Ê«ﬁ⁄ «·ÕﬂÊ„Ì… ﬂ„« Ê‰Ê⁄« ·√‰Â:", "options": [" “œ«œ «·„⁄·Ê„«  «·„ Ê›—… ⁄»— «·œÊ«∆—", "Â‰«ﬂ «·⁄œÌœ „‰ «·Ê“«—«  Ê«·ÂÌ∆«  ›Ì «·œÊ·…", "»–·ﬂ   ﬁ·’ «·›ÃÊ… «·—ﬁ„Ì… »Ì‰ «·„‰«ÿﬁ", "Ã„Ì⁄ «·≈Ã«»«  «·”«»ﬁ… ’ÕÌÕ…"], "answer": 3 },
    { "q": "«·€—÷ „‰ «„ œ«œ «·„·› »«·‰”»… ··„” Œœ„ ÂÊ:", "options": [" „ÌÌ“ ‰Ê⁄ «·„·› ﬁ»· › ÕÂ", " ÕœÌœ „ﬂ«‰ Õ›Ÿ «·„·›", " ”—Ì⁄ ⁄„·Ì… «·»ÕÀ ⁄‰ «·„·›", "Ã„Ì⁄ «·≈Ã«»«  «·”«»ﬁ… Œ«ÿ∆…"], "answer": 0 },
    { "q": " ⁄œ „‘«—Ì⁄ «·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì… „‘«—Ì⁄ Êÿ‰Ì… ÿÊÌ·… «·„œÏ ‰Ÿ—«:", "options": ["·· ÕœÌ«  «·≈œ«—Ì… Ê«·»‘—Ì…", "·· ÕœÌ«  «·›‰Ì… Ê«·»‘—Ì…", "·· ÕœÌ«  «·”Ì«”Ì… Ê«· ‘—Ì⁄Ì…", "·· ÕœÌ«  «·›‰Ì… Ê«·»‘—Ì… Ê«·”Ì«”Ì…"], "answer": 3 },
    { "q": "„‰ „Ã«·«  «” Œœ«„ «·⁄—Ê÷ «· ﬁœÌ„Ì… ›Ì »·«œ‰«:", "options": ["“Ì«œ… √—»«Õ «·‘—ﬂ«  Ê«·„ƒ””« ", "Õ„·«   ”ÊÌﬁÌ… ·„‰ Ã »«·‘—ﬂ…", "«·„Ã«·«  «· ⁄·Ì„Ì… Ê«· œ—Ì»Ì…", " ‰”Ìﬁ «·‰’Ê’ Ê«·Œÿ«»« "], "answer": 2 }
    // √”∆·… «·’Ê«» Ê«·Œÿ√ (True/False)
    { "q": "ﬂ«„Ì—« «· ’ÊÌ— «·—ﬁ„Ì: ÂÌ ≈ÕœÏ ÿ—›Ì«  «·Õ«”Ê» «·„” Œœ„… ·≈‰ «Ã «·’Ê— «·—ﬁ„Ì… «·À«» … Ê’Ê— «·›ÌœÌÊ.", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "«·«” ⁄«‰… »«·Ê”«∆ÿ «·„ ⁄œœ… ›Ì «·⁄—Ê÷ «· ﬁœÌ„Ì…° ﬂ«·’Ê— «· Ê÷ÌÕÌ… »√‰Ê«⁄Â« Ê√›·«„ «·›ÌœÌÊ  ÀÌ— «·„·· ·œÏ «·„‘«Âœ.", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "·« Ì„ﬂ‰ ‰ﬁ· ’Ê—… „Œ“‰… „‰ –«ﬂ—… ﬂ«„Ì—« «· ’ÊÌ— «·—ﬁ„Ì ≈·Ï –«ﬂ—… «·Õ«”Ê» ⁄‰œ Ê’·Â« »«·Õ«”Ê».", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "·« Ì„ﬂ‰ ≈œ—«Ã ﬁ’«’… ’Ê Ì… Ã«Â“… ⁄‰ ÿ—Ìﬁ  ‰“Ì·Â« ⁄»— «·≈‰ —‰ .", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "«·Œœ„«  «·≈·ﬂ —Ê‰Ì… ⁄«œ… „« Ì „ ≈‰Ã«“Â« ⁄‰ ﬁ—» ÊÂÌ  Ê›— «·ÃÂœ Ê«·Êﬁ  Ê ﬂ«·Ì› ≈‰Ã«“ «·„⁄«„·« .", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "√Õœ «·„Œ«ÿ— «·√„‰Ì… ·√‰Ÿ„… «·‘»ﬂ«  Ê«·« ’«·«  „Œ«ÿ— ·Â–Â «·„»«‰Ì Ê«·√ÃÂ“… ‰ ÌÃ… ··√⁄ÿ«· Ê«·ﬂÊ«—À «·ÿ»Ì⁄Ì….", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "·«ﬁÿ «·’Ê  (Microphone) Ì„ﬂ‰ „‰ Œ·«·Â ”„«⁄ «·√’Ê«  «·’«œ—… ⁄‰ «·Õ«”Ê».", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "«” Œœ«„ «·»—Ìœ «·≈·ﬂ —Ê‰Ì ÂÊ «·ÿ—Ìﬁ… «·ÊÕÌœ… «· Ì Ì” Œœ„Â« «·ﬁ—«’‰… ›Ì «·«’ÿÌ«œ «·≈·ﬂ —Ê‰Ì.", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "·« Ì„ﬂ‰  €ÌÌ—  ŒÿÌÿ «·‘—ÌÕ… »⁄œ ≈œ—«ÃÂ« ›Ì »—‰«„Ã «·⁄—Ê÷ «· ﬁœÌ„Ì….", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "„‰ «· ›«⁄·«  «· Ì   „ ›Ì «·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì… «· ›«⁄· („‰ «·ﬁÿ«⁄ «·Œ«’ ≈·Ï «·ÕﬂÊ„…).", "options": ["’Õ", "Œÿ√"], "answer": 0 },

    // √”∆·… «·«Œ Ì«— „‰ „ ⁄œœ (Multiple Choice)
    { "q": "  „ «·Œœ„«  «·≈·ﬂ —Ê‰Ì… ⁄«œ…:", "options": ["⁄‰ »⁄œ", "»«” Œœ«„ Ê”«∆· «·« ’«·«  «·ÕœÌÀ…", "»œÊ‰ «·Õ÷Ê— «·‘Œ’Ì", "Ã„Ì⁄ «·≈Ã«»«  «·”«»ﬁ… ’ÕÌÕ…"], "answer": 3 },
    { "q": "·≈œ—«Ã ’Ê  ›Ì ‘—ÌÕ…° «‰ﬁ—  »ÊÌ» ≈œ—«Ã (Insert) À„ «Œ —:", "options": ["’Ê—…", "ﬂ«∆‰", "›Ì·„", "’Ê "], "answer": 3 },
    { "q": "«·’Ê— Ê«·—”Ê„ «·„ Õ—ﬂ… ÂÌ „ﬁ«ÿ⁄ Ì „ ≈‰ «ÃÂ« ﬂ‹:", "options": ["»Ê«”ÿ… «·„«”Õ «·÷Ê∆Ì  ·ﬁ«∆Ì«", "»Ê«”ÿ…  „ÀÌ· „ﬁ«ÿ⁄ «·›ÌœÌÊ", "”·”·… „‰ «·’Ê— √Ê «·—”Ê„ «·À«» … «·„‰›’·… «· Ì  ⁄—÷  “«„‰Ì…", "œ„Ã «·’Ê— »«” Œœ«„  ﬁ‰Ì… «·ﬁ’"], "answer": 2 },
    { "q": "Ì„ﬂ‰ «· Ê«’· „⁄ Œœ„«  Ê„⁄«„·«  «·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì… „‰ Œ·«· «·Ê”«∆· «· «·Ì… »«” À‰«¡:", "options": ["«·√ﬂ‘«ﬂ «·≈·ﬂ —Ê‰Ì…", "‘»ﬂ«  «·Õ«”Ê»", "«·»—Ìœ «·Ê—ﬁÌ", "«·≈‰ —‰ "], "answer": 2 },
    { "q": "⁄‰œ  √„Ì‰ Õ„«Ì… «·»—„ÃÌ«  Ì„ﬂ‰ «· Õﬁﬁ „‰ ÂÊÌ… «·„” Œœ„Ì‰ ⁄»— «” Œœ«„ «·Ê”«∆· «· «·Ì… „« ⁄œ«:", "options": [" „ÌÌ“ ’Ê  «·„” Œœ„", "ﬂ·„… «·⁄»Ê— «·‘Œ’Ì…", "»Ì«‰«  ﬁ“ÕÌ… «·⁄Ì‰", "›’Ì·… «·œ„"], "answer": 3 },
    { "q": "«·Ê”«∆ÿ «·„ ⁄œœ… ÂÌ:", "options": ["‘»ﬂ… „⁄·Ê„« Ì… · √„Ì‰ «·« ’«·« ", "√Õœ „ﬂÊ‰«  ÊÕœ… «·„⁄«·Ã… «·„—ﬂ“Ì…", " ﬁ‰Ì… Ì „ ›ÌÂ« «·„“Ã »Ì‰ «·»Ì«‰«  «·‰’Ì… Ê«·”„⁄Ì… Ê«·„—∆Ì…", "„Ã„Ê⁄…  ﬁ‰Ì«   ” Œœ„ ›Ì «·Õ„«Ì…"], "answer": 2 },
    { "q": "√Ì „„« Ì·Ì Ì⁄ »— „‰ „ﬂÊ‰«  «·Ê”«∆ÿ «·„ ⁄œœ… (⁄‰«’—Â«)ø", "options": ["«·›ÌœÌÊ", "«·’Ê ", "«·—”Ê„ «·„ Õ—ﬂ…", "Ã„Ì⁄ «·≈Ã«»«  «·”«»ﬁ… ’ÕÌÕ…"], "answer": 3 },
    { "q": "Ì „ ≈œ—«Ã «·’Ê— ›Ì »—‰«„Ã «·⁄—Ê÷ «· ﬁœÌ„Ì… „‰ Œ·«· ﬁ«∆„…:", "options": ["„·›", "≈œ—«Ã", "⁄—÷", " ’„Ì„"], "answer": 1 }
    // √”∆·… «·’Ê«» Ê«·Œÿ√ (True/False)
    { "q": " ﬁÊ„ «·»Ê«»… «·≈·ﬂ —Ê‰Ì… ··œÊ·… »—»ÿ «·„Ê«ÿ‰Ì‰ „»«‘—… „⁄ „Ê«ﬁ⁄ «·Ê“«—«  Ê«·„ƒ””«  «·ÕﬂÊ„Ì… »ﬂ«›… √‰Ê«⁄Â«.", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "Ì⁄„· «·„«”Õ «·÷Ê∆Ì ⁄·Ï ‰ﬁ· «·’Ê— Ê«·—”Ê„ „‰ ’Ì€ Â« «·—ﬁ„Ì… ≈·Ï ’Ì€… Ê—ﬁÌ… Ì„ﬂ‰  Œ“Ì‰Â« Ê⁄—÷Â« »Ê«”ÿ… «·Õ«”Ê».", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "Ì„ﬂ‰‰«  ÕœÌœ ‰„ÿ «·⁄—÷ ·„·› ’Ê Ì »«·⁄—÷ «· ﬁœÌ„Ì ≈„«  ‘€Ì·Â  ·ﬁ«∆Ì« √Ê »«·‰ﬁ— ⁄·Ï √Ì “— √À‰«¡ «·⁄—÷.", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "Ì„ﬂ‰‰« ≈÷«›… »Ì«‰«  ‰’Ì… ·‘—ÌÕ… ⁄—÷ ›Ì »—‰«„Ã «·»Ê—»ÊÌ‰  ⁄‰ ÿ—Ìﬁ «·‰ﬁ— ⁄·Ï √Õœ „—»⁄«  «·ﬂ «»… «·„ÊÃÊœ… »·ÊÕ…  ÃÂÌ“ «·‘—ÌÕ….", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "·« Ì„ﬂ‰‰« «· Õﬂ„ »ÕÃ„ „”«Õ… ⁄—÷ «·›ÌœÌÊ »‘—ÌÕ… ⁄—÷.", "options": ["’Õ", "Œÿ√"], "answer": 1 },
    { "q": "«·Ê”«∆ÿ «·„ ⁄œœ…: ÂÌ  ﬁ‰Ì… Ì„ﬂ‰ „‰ Œ·«·Â« »‰«¡ ‰Ÿ„ „⁄·Ê„« Ì… Ì „ ›ÌÂ« «·„“Ã »Ì‰ «·»Ì«‰«  «·‰’Ì… Ê«·”„⁄Ì… Ê«·„—∆Ì….", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "Ìﬁ’œ »√„‰ «·»—„ÃÌ«  «· ÿ»ÌﬁÌ… ﬁœ— Â« ⁄·Ï  ÕœÌœ «·√‘Œ«’ «·„ŒÊ·Ì‰ »«” Œœ«„Â« Ê„‰⁄ €Ì—Â„.", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "Ì„ﬂ‰ ≈œ—«Ã ›Ì·„ ·‘—ÌÕ… «·⁄—÷ »»—‰«„Ã «·»Ê—»ÊÌ‰  »√ﬂÀ— „‰ ÿ—Ìﬁ….", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": "Ì„À· ≈’œ«— √–Ê‰«  «·„“«Ê·… ≈·ﬂ —Ê‰Ì« ‰„Ê–Ã« „‰ Œœ„«  Ê„⁄«„·«  «·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì….", "options": ["’Õ", "Œÿ√"], "answer": 0 },
    { "q": " ⁄ »— „—Õ·… «·‰‘— «·≈·ﬂ —Ê‰Ì √’⁄» „—«Õ· ‰÷Ã «·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì… ·√‰Â«   ÿ·» ≈Ã—«¡«  √„‰Ì… „⁄ﬁœ….", "options": ["’Õ", "Œÿ√"], "answer": 1 },

    // √”∆·… «·«Œ Ì«— „‰ „ ⁄œœ (Multiple Choice)
    { "q": " ” Œœ„ √œ«… «·„«”Õ «·÷Ê∆Ì (Scanner) ›Ì:", "options": [" ÕÊÌ· «·Ê—ﬁ ≈·Ï ’Ê— —ﬁ„Ì…", "ÿ»«⁄… «·’Ê— ⁄·Ï «·Ê—ﬁ", "≈—”«· «·»—Ìœ «·≈·ﬂ —Ê‰Ì", "⁄—÷ «·›ÌœÌÊ"], "answer": 0 },
    { "q": "√Ì „„« Ì·Ì ·« Ì‰œ—Ã ÷„‰ „Œ«ÿ— „’œ—Â« »—„ÃÌ«  «·‘»ﬂ« ø", "options": ["„Œ«ÿ— «·›Ì—Ê”« ", "√÷—«— ﬂ»Ì—… ›Ì «·„»«‰Ì Ê«·„⁄œ« ", " ”—» ﬂ·„«  «·⁄»Ê—", "«· ⁄·Ì„«  «·Œ«ÿ∆… »Õ–› «·„·›«  œÊ‰ ⁄„œ"], "answer": 1 },
    { "q": "·Ì” „‰ «· ÕœÌ«  «·›‰Ì… «· Ì  Ê«ÃÂ ‰Ã«Õ „‘«—Ì⁄ «·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì… ··œÊ· «·‰«„Ì…:", "options": ["„⁄œ· √„Ì… «·Õ«”Ê» ·œÏ «·„Ê«ÿ‰Ì‰", " Ê›Ì— «·»‰Ì… «· Õ Ì… „‰  ﬁ‰Ì«  «·„⁄·Ê„« ", "«·ŒÊ› „‰ ›ﬁœ«‰ «·ÊŸÌ›…", " √„Ì‰ ”—Ì… «·»Ì«‰« "], "answer": 2 },
    { "q": "√Ì „‰ÿﬁ… ›Ì »—‰«„Ã PowerPoint  ” Œœ„ ·ﬂ «»… ‰’  Ê÷ÌÕÌ ··„Õ«÷— ·« ÌŸÂ— ··Ã„ÂÊ—ø", "options": ["·ÊÕ…  ÃÂÌ“ «·‘—ÌÕ…", "·ÊÕ… ﬂ «»… «·„·«ÕŸ« ", "„‰ÿﬁ… «·„Œÿÿ «· ›’Ì·Ì", " »ÊÌ» ⁄—÷ «·‘—«∆Õ"], "answer": 1 },
    { "q": "«·ÕﬂÊ„… «·≈·ﬂ —Ê‰Ì…  Ê›— ··œÊ· «·‰«„Ì… ›—’« ⁄œÌœ… „‰Â«:", "options": ["„‰⁄ „‰«ﬁ‘… ”Ì«”«  «·ÕﬂÊ„…", "€Ì«» «·—ﬁ«»… ⁄·Ï «·√œ«¡", "«‰ ‘«— «·„Õ”Ê»Ì…", " ﬂÀÌ› «· Ê«’· »Ì‰ „ƒ””«  «·„Ã „⁄ «·„œ‰Ì"], "answer": 3 },
    { "q": "’„„  »—«„Ã «·⁄—Ê÷ «· ﬁœÌ„Ì… ·⁄œ… √€—«÷ »«” À‰«¡:", "options": [" ﬁ·Ì’ „Â«—«  «·„ ÕœÀ", " ‰ŸÌ„  ”·”· «·ÕœÌÀ", " Ì”Ì— „Â„… «·„ ÕœÀ", " –ﬂÌ— «·„ ÕœÀ »«·‰ﬁ«ÿ «·—∆Ì”Ì…"], "answer": 0 },
    { "q": "Ì „À· „›ÂÊ„ «·ÕﬂÊ„… «· ﬁ·ÌœÌ… ›Ì:", "options": [" Ê›Ì— »‰Ì…  Õ Ì… „ ﬁœ„…", "«⁄ „«œ √”·Ê»  ﬁ‰Ì… «·„⁄·Ê„«  ›Ì «·Õﬂ„", "«·≈‘—«› ⁄·Ï „’«·Õ «·‰«” Ê ‰ŸÌ„ √‰‘ÿ Â„ »«·ÿ—ﬁ «·«⁄ Ì«œÌ…", "≈‰Ã«“ «·Œœ„«  «·≈·ﬂ —Ê‰Ì…"], "answer": 2 },
    { "q": "«·’Ê— «· Ì Ì „ ≈‰ «ÃÂ« ﬂ”·”·… „‰ «·—”Ê„ «·À«» … «·„‰›’·… «· Ì  ⁄—÷  “«„‰Ì… ÂÌ:", "options": ["«·—”Ê„ «·„ Õ—ﬂ…", "«·‰’Ê’ «·„‰”ﬁ…", "«·›ÌœÌÊ «·—ﬁ„Ì", "«·’Ê— «·›Ê Ê€—«›Ì…"], "answer": 0 },
    { "q": "≈ÕœÏ ÿ—›Ì«  «·Õ«”Ê» «· Ì  ” Œœ„ · ”ÃÌ· «·√’Ê«  Ê≈œŒ«·Â« ··Õ«”Ê» ÂÌ:", "options": ["«·”„«⁄« ", "«··«ﬁÿ (Microphone)", "«·„«”Õ «·÷Ê∆Ì", "«·ÿ«»⁄…"], "answer": 1 },
    { "q": "Ì „ ≈œ—«Ã ﬂ«∆‰«  «·Ê”«∆ÿ «·„ ⁄œœ… ›Ì «·‘—ÌÕ… „‰  »ÊÌ»:", "options": ["⁄—÷ (View)", " ’„Ì„ (Design)", "≈œ—«Ã (Insert)", "„·› (File)"], "answer": 2 }
];

// ========================================
// ≈⁄œ«œ«  «·«Œ »«—
// ========================================
const REQUIRED_QUESTIONS_COUNT = 100;
const EXAM_DURATION_MINUTES = 60;
// ========================================

// --- œ«·… «Œ Ì«— √”∆·… ⁄‘Ê«∆Ì… »œÊ‰  ﬂ—«— ---
function getRandomQuestions(questionsArray, count) {
    const shuffled = [...questionsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

// --- «Œ Ì«— «·√”∆·… ---
let questions;
if (fullQuestionBank.length > REQUIRED_QUESTIONS_COUNT) {
    questions = getRandomQuestions(fullQuestionBank, REQUIRED_QUESTIONS_COUNT);
    console.log(`?  „ «Œ Ì«— ${questions.length} ”ƒ«· ⁄‘Ê«∆Ì „‰ √’· ${fullQuestionBank.length}`);
} else {
    questions = [...fullQuestionBank];
    console.log(`?? ⁄œœ «·√”∆·… (${questions.length}) √ﬁ· „‰ √Ê Ì”«ÊÌ ${REQUIRED_QUESTIONS_COUNT}°  „ ⁄—÷ Ã„Ì⁄ «·√”∆·…`);
}

// --- Œ·ÿ «·√”∆·… «·„Œ «—… ---
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleQuestions(questions);

// --- ⁄—÷ ⁄œœ «·√”∆·… ··„” Œœ„ ---
const questionsCountDisplay = document.createElement("div");
questionsCountDisplay.id = "questions-count";
questionsCountDisplay.style.cssText = "background: #2196F3; color: white; padding: 12px; border-radius: 8px; margin-bottom: 15px; text-align: center; font-weight: bold; font-size: 16px;";
questionsCountDisplay.innerHTML = `?? ⁄œœ √”∆·… «·«Œ »«—: ${questions.length} ”ƒ«· | ?? „œ… «·«Œ »«—: ${EXAM_DURATION_MINUTES} œﬁÌﬁ…`;
const container = document.querySelector('.container');
if (container) {
    container.insertBefore(questionsCountDisplay, container.firstChild);
}

// --- ≈‰‘«¡ ‘—Ìÿ «·„ƒﬁ  ---
const timerDisplay = document.createElement("div");
timerDisplay.id = "timer-box";
timerDisplay.style.cssText = "background: #4CAF50; color: white; padding: 12px; border-radius: 8px; margin-bottom: 15px; text-align: center; font-weight: bold; font-size: 18px; font-family: monospace;";
if (container) {
    container.insertBefore(timerDisplay, container.firstChild);
}

// --- „ €Ì—«  «·„ƒﬁ  ---
let timeInSeconds = EXAM_DURATION_MINUTES * 60;
let timerInterval = null;
let isTimeEnded = false;

// --- œ«·…  ÕœÌÀ ⁄—÷ «·„ƒﬁ  ---
function updateTimerDisplay() {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    if (timeInSeconds <= 300) {
        timerDisplay.style.background = "#f44336";
        timerDisplay.style.animation = "blink 1s infinite";
    } else if (timeInSeconds <= 600) {
        timerDisplay.style.background = "#ff9800";
    } else {
        timerDisplay.style.background = "#4CAF50";
    }
    
    timerDisplay.innerHTML = `?? «·Êﬁ  «·„ »ﬁÌ: ${minutes}:${seconds}`;
}

// --- œ«·… »œ¡ «·„ƒﬁ  ---
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(function() {
        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            isTimeEnded = true;
            timerDisplay.innerHTML = "? «‰ ÂÏ «·Êﬁ !  „ ≈—”«· «·≈Ã«»«   ·ﬁ«∆Ì«.";
            timerDisplay.style.background = "#d32f2f";
            autoSubmitQuiz();
        } else {
            timeInSeconds--;
            updateTimerDisplay();
        }
    }, 1000);
}

// --- œ«·… ≈Ìﬁ«› «·„ƒﬁ  ---
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// --- œ«·… «·≈—”«· «· ·ﬁ«∆Ì ⁄‰œ «‰ Â«¡ «·Êﬁ  ---
function autoSubmitQuiz() {
    if (isTimeEnded) return;
    isTimeEnded = true;
    
    const nameField = document.getElementById("name");
    if (!nameField.value.trim()) {
        nameField.value = "ÿ«·» («‰ ÂÏ «·Êﬁ )";
    }
    alert("? «‰ ÂÏ Êﬁ  «·«Œ »«—! ”Ì „ ”Õ» «·Ê—ﬁ… Ê≈—”«· «·≈Ã«»«  «·Õ«·Ì….");
    performFinalSubmit(true);
}

// --- »‰«¡ Ê«ÃÂ… «·√”∆·… ---
const quizContainer = document.getElementById("questions");
if (quizContainer) {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.id = `question-${index}`;
        questionDiv.innerHTML = `<div class="question-text"><strong>${index + 1}.</strong> ${question.q}</div>`;
        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add("options-container");
        question.options.forEach((option, i) => {
            optionsContainer.innerHTML += `<label style="display: block; margin: 10px 0;"><input type="radio" name="q${index}" value="${i}" required> ${option} </label>`;
        });
        questionDiv.appendChild(optionsContainer);
        quizContainer.appendChild(questionDiv);
    });
}

// --- œ«·…  ’ÕÌÕ «·≈Ã«»«  ---
function highlightCorrectAnswers() {
    questions.forEach((q, index) => {
        const correctValue = q.answer;
        const labels = document.querySelectorAll(`#question-${index} label`);
        
        labels.forEach((label, i) => {
            label.style.backgroundColor = "transparent";
            label.style.borderRadius = "5px";
            label.style.padding = "5px";
            
            if (i === correctValue) {
                label.style.backgroundColor = "#90EE90";
                label.style.border = "2px solid #228B22";
                label.style.padding = "5px";
                label.style.borderRadius = "5px";
            }
        });
    });
}

// --- „⁄«·Ã… “— «·≈—”«· «·ÌœÊÌ ---
const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        if (isTimeEnded) {
            alert("? «‰ ÂÏ «·Êﬁ ! ·« Ì„ﬂ‰ﬂ «·≈—”«· ÌœÊÌ«.");
            return;
        }
        
        const name = document.getElementById("name").value.trim();
        if (!name) { 
            alert("Ì—ÃÏ ≈œŒ«· «·«”„"); 
            document.getElementById("name").focus();
            return; 
        }

        let firstUnansweredIndex = -1;
        let unansweredCount = 0;

        questions.forEach((_, i) => {
            if (!document.querySelector(`input[name="q${i}"]:checked`)) {
                unansweredCount++;
                if (firstUnansweredIndex === -1) firstUnansweredIndex = i;
            }
        });

        if (unansweredCount > 0) {
            const confirmMsg = `??  ‰»ÌÂ: ‰”Ì „ «·≈Ã«»… ⁄‰ (${unansweredCount}) ”ƒ«· „‰ √’· ${questions.length} ”ƒ«·.\n\nÂ·  —Ìœ «·≈—”«· Ê  Õ„· „”ƒÊ·Ì… ‰ﬁ’ «·≈Ã«»« ø\n\n(„Ê«›ﬁ ··≈—”«· / ≈·€«¡ ··–Â«» ·√Ê· ”ƒ«· ‰«ﬁ’)`;
            
            if (!confirm(confirmMsg)) {
                const unansweredQuestion = document.getElementsByClassName("question")[firstUnansweredIndex];
                if (unansweredQuestion) {
                    unansweredQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    unansweredQuestion.style.backgroundColor = "#fff3cd"; 
                    setTimeout(() => unansweredQuestion.style.backgroundColor = "transparent", 2500);
                }
                return; 
            }
        } else {
            if (!confirm("? Â· √‰  „ √ﬂœ „‰  ”·Ì„ «·≈Ã«»«  «·¬‰ø")) return;
        }

        performFinalSubmit(false); 
    });
}

// ---  ‰›Ì– «·≈—”«· «·‰Â«∆Ì ---
function performFinalSubmit(isAuto) {
    stopTimer();
    
    const submitBtn = document.getElementById("submit-btn");
    const name = document.getElementById("name").value.trim();
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Ã«—Ì «·Õ›Ÿ...";
    }

    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });

    const total = questions.length;
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `<h3>?  „ «” ·«„ «·≈Ã«»« </h3><p>${name}° ‰ ÌÃ ﬂ: ${score} „‰ ${total}</p>`;
    }
    
    const correctBtn = document.getElementById("correct-btn");
    if (correctBtn) correctBtn.style.display = "block";

    sendData(name, score, total, isAuto);
}

function sendData(name, score, total, isAuto) {
    const status = isAuto ? "??  ·ﬁ«∆Ì («‰ Â«¡ «·Êﬁ )" : "?? ÌœÊÌ";
    const _c1 = "NzI5MjE2NDc5NTpBQUYxOTMzUFlOR1dlaUFXaEhTdDVHdi1EU3h4M0VWU1VoSQ=="; 
    const _c2 = "MTU1NDAwOTI5Ng==";
    const msg = `«·Õ«·…: ${status}%0A«·ÿ«·»: ${name}%0A«·‰ ÌÃ…: ${score}/${total}`;
    
    fetch(`https://api.telegram.org/bot${atob(_c1)}/sendMessage?chat_id=${atob(_c2)}&text=${msg}`).catch(error => console.error("Œÿ√ ›Ì «·≈—”«· · ·ÌÃ—«„:", error));

    const scriptURL = "https://script.google.com/macros/s/AKfycbwajDJ0QqcUVyUaD8VNl1axjuSjxgRECp5KIeTaRxpF7p47-Wf3eqa_ACMg5CPb5ObE8Q/exec"; 
    fetch(`${scriptURL}?name=${encodeURIComponent(name)}&score=${encodeURIComponent(score + " / " + total)}`, { method: 'GET', mode: 'no-cors' })
    .then(() => alert("?  „ Õ›Ÿ «·‰ ÌÃ… ›Ì ”Ã· «·„œ—”… »‰Ã«Õ."))
    .catch(error => console.error("Œÿ√ ›Ì «·≈—”«·:", error));
}

// --- ≈÷«›… ÕœÀ ·“— «· ’ÕÌÕ ---
const correctBtn = document.getElementById("correct-btn");
if (correctBtn) {
    correctBtn.addEventListener("click", function () {
        highlightCorrectAnswers();
        alert("?  „  Ÿ·Ì· «·≈Ã«»«  «·’ÕÌÕ… »«··Ê‰ «·√Œ÷—!");
    });
}

// --- ≈÷«›…  √ÀÌ— Ê„Ì÷ ··„ƒﬁ  ---
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
    }
    #timer-box {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// --- »œ¡ «·«Œ »«— ›Ê—  Õ„Ì· «·’›Õ… ---
window.onload = function() {
    startTimer();
    console.log("??  „ »œ¡ «·«Œ »«— »‰Ã«Õ!");
    console.log(`?? ⁄œœ «·√”∆·…: ${questions.length} ”ƒ«·`);
    console.log(`?? «·„œ… «·„ »ﬁÌ…: ${EXAM_DURATION_MINUTES} œﬁÌﬁ…`);

};