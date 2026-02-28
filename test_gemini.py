import os
import sys

# 设置API key环境变量
os.environ['GEMINI_API_KEY'] = 'AIzaSyDDNwtYUdLifw4Hh6PQMxqDzAQuDrkWHiM'

try:
    from google import genai
    print("✓ google-genai package available")
    
    # 创建客户端
    client = genai.Client()
    print("✓ Client created")
    
    # 测试API调用
    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents="Explain how AI works in a few words"
    )
    
    print("✓ API call successful!")
    print(f"Response: {response.text[:100]}...")
    
except ImportError as e:
    print(f"✗ Import error: {e}")
    print("Try: pip install google-genai")
except Exception as e:
    print(f"✗ API error: {type(e).__name__}: {e}")
    if "network" in str(e).lower() or "connect" in str(e).lower():
        print("Network connectivity issue detected")
    elif "key" in str(e).lower() or "auth" in str(e).lower():
        print("API key authentication issue")
    elif "model" in str(e).lower():
        print("Model name issue")