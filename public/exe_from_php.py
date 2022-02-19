#!/usr/local/bin/python3.7
# coding:utf-8
# MySQLdbのインポート
import MySQLdb
import sys
import json

# データベースへの接続とカーソルの生成
connection = MySQLdb.connect(
    host='mysql202.phy.lolipop.lan',
    user='LAA1400403',
    passwd='test',
    db='LAA1400403-test20220219')

# with connection.cursor(MySQLdb.cursors.DictCursor) as cursor:
#     cursor.execute(f"SELECT * FROM test WHERE id='{sys.argv[1]}'")
#     data = cursor.fetchall()
# print(json.dumps(data, indent=4))
cursor = connection.cursor()

cursor.execute(f"SELECT * FROM test WHERE id='{sys.argv[1]}'")
data = cursor.fetchall()
print(json.dumps(data, indent=4))
# for row in cursor:
#   print (row)

# 保存を実行
connection.commit()

# 接続を閉じる
connection.close()
