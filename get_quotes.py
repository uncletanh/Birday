import random

path = r'C:\Users\tiena\Downloads\your_instagram_activity\messages\inbox\hanhnguyen_1551786706226471\message_transcript.txt'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

quotes = []
for l in lines:
    if '] Hanh Nguyen: ' in l and 'Reacted' not in l and '<' not in l and 'http' not in l:
        msg = l.split('] Hanh Nguyen: ')[1].strip()
        if len(msg) > 30:
            quotes.append(msg)

with open('temp_quotes.txt', 'w', encoding='utf-8') as out:
    out.write('\n'.join(random.sample(quotes, min(30, len(quotes)))))
