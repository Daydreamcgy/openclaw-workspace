import requests
import json
import os

api_key = "AIzaSyDDNwtYUdLifw4Hh6PQMxqDzAQuDrkWHiM"
url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key={api_key}"

headers = {
    "Content-Type": "application/json"
}

data = {
    "contents": [
        {
            "parts": [
                {
                    "text": "Explain how AI works in a few words"
                }
            ]
        }
    ]
}

# 设置代理
proxies = {
    "http": "http://127.0.0.1:7890",
    "https": "http://127.0.0.1:7890"
}

try:
    print("Testing Gemini API connection...")
    response = requests.post(url, headers=headers, json=data, proxies=proxies, timeout=10)
    
    if response.status_code == 200:
        result = response.json()
        if "candidates" in result and len(result["candidates"]) > 0:
            text = result["candidates"][0]["content"]["parts"][0]["text"]
            print(f"SUCCESS! Gemini response: {text}")
        else:
            print(f"Response received but no candidates: {json.dumps(result, indent=2)}")
    else:
        print(f"HTTP Error {response.status_code}: {response.text}")
        
except requests.exceptions.ConnectionError as e:
    print(f"Connection error: {e}")
    print("Check your proxy settings (Clash TUN mode)")
except requests.exceptions.Timeout as e:
    print(f"Timeout error: {e}")
    print("Network may be slow or blocked")
except Exception as e:
    print(f"Other error: {type(e).__name__}: {e}")