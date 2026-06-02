import json
import datetime
import os

path = r"C:\Users\tiena\Downloads\your_instagram_activity\messages\inbox\hanhnguyen_1551786706226471\message_1.json"

def fix_encoding(s):
    if not s:
        return ""
    try:
        # Instagram's JSON often encodes utf-8 bytes as latin-1
        return s.encode('latin-1').decode('utf-8')
    except:
        return s

with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

messages = data.get('messages', [])
# Sort chronologically
messages.sort(key=lambda x: x.get('timestamp_ms', 0))

out_path = r"C:\Users\tiena\Downloads\your_instagram_activity\messages\inbox\hanhnguyen_1551786706226471\message_transcript.txt"

with open(out_path, 'w', encoding='utf-8') as f:
    for m in messages:
        sender = fix_encoding(m.get('sender_name', 'Unknown'))
        content = fix_encoding(m.get('content', ''))
        timestamp = m.get('timestamp_ms', 0)
        dt = datetime.datetime.fromtimestamp(timestamp / 1000.0).strftime('%Y-%m-%d %H:%M:%S')
        
        # Check for photos/videos
        if 'photos' in m:
            content += " [Sent a photo: {}]".format(m['photos'][0].get('uri'))
        if 'videos' in m:
            content += " [Sent a video: {}]".format(m['videos'][0].get('uri'))
        if 'audio_files' in m:
            content += " [Sent an audio]"
            
        f.write(f"[{dt}] {sender}: {content}\n")

print("Transcript generated at:", out_path)
