<div class="form-group">
    <label>{{__("Footer Info Contact")}}</label>
    <div class="form-controls">
        <div id="info_text_editor" class="ace-editor" style="height: 400px" data-theme="textmate" data-mod="html">{{setting_item_with_lang('footer_info_text',request()->query('lang'))}}</div>
        <textarea class="d-none" name="footer_info_text" > {{ setting_item_with_lang('footer_info_text',request()->query('lang')) }} </textarea>
    </div>
</div>