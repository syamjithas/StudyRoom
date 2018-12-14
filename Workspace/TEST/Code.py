import xlwt
import glob
import datetime
import os
import shutil
from xlrd import open_workbook

column_length = 5
fillers =[0,3,1]
fileList =[]

wb = open_workbook('input.xls')

for sheet in wb.sheets() :
    for fitIN in range(4,sheet.ncols,5) :
        fitfile =[]
        for frow in range(1,sheet.nrows):
            col_value = []
            value1 = (sheet.cell(frow,fitIN-4).value)
            if value1 == '':
                break
            col_value.append(value1)
            value2 = (sheet.cell(frow,fitIN-3).value)
            col_value.append(value2)
            col_value = col_value + fillers
            fitfile.append(col_value)
        fileList.append(fitfile)

cwd = os.getcwd()

for i in range(0,len(fileList)):
    if not os.path.exists(cwd + '\\'+'H3D2_'+str(i+1)):
        os.makedirs(cwd + '\\'+'H3D2_'+str(i+1))
        src_files = os.listdir(cwd+'\\H3D2')
        for file_name in src_files:
            full_file_name = os.path.join(cwd+'\\H3D2', file_name)
            if (os.path.isfile(full_file_name)):
                shutil.copy(full_file_name, cwd + '\\'+'H3D2_'+str(i+1))
        with open("FIT.IN") as f:
            lines = f.readlines()
            length =  len(fileList[i])
            lines[5] = f'{length:>7}      10       2\n'
            lines[len(lines)-1]=lines[len(lines)-1]+'\n'
            for frow in fileList[i]:
                txt = f'{frow[0]:>11}{frow[1]:>12}{frow[2]:>7}{frow[3]:>7}{frow[4]:>8}\n'
                lines.append(txt)
            lines.append("end*** END OF INPUT FILE 'FIT.IN' **********************************")
            with open(cwd + '\\'+'H3D2_'+str(i+1)+'\\FIT.IN', "w") as f1:
                f1.writelines(lines)
            f1.close()
            with open(cwd + '\\'+'H3D2_'+str(i+1)+'\\Level_01.dir', "w") as f1:
                f1.write(cwd + '\\'+'H3D2_'+str(i+1))
            f1.close()
        f.close()
